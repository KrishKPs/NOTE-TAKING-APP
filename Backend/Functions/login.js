const { user } = require("../db");
const generateToken = require("../generate");
const bcrypt = require('bcrypt');    


async function login (req,res) {

    const person = req.body; 

    const userExists = await user.findOne({username : person.username});

    if(!userExists){
        res.status(404).json({msg : "User Not Found"}); 
        return;     
    }
    console.log(userExists.Password); 

    const checkpass = await bcrypt.compare(person.Password , userExists.Password); 
    console.log(checkpass); 
    console.log(userExists.Password); 

    if(!checkpass) { 
        res.status(401).json({msg : "Invalid Password"}); 
        return   } 

    const token = generateToken(person); 

    res.json({msg : "Logged In" , token : token});         

}
module.exports = login ;     