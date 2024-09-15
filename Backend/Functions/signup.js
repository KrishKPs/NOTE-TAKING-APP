const { user } = require("../db");
const generateToken = require("../generate");
const { userSchema } = require("../type");
const bcrypt = require('bcrypt');    

async function signup (req,res) {


    const person = req.body; 
    const safeperson = userSchema.safeParse(person); 

    if(!safeperson.success) {
        res.status(411).json({msg : "Invalid Input" });  
        return; 
    }


    const hash = await bcrypt.hash(person.Password , 10); 

    await user.create({
       Name : person.Name,
       username : person.username,
       Email : person.Email,
       Password : hash

    })

    const token = generateToken(person); 

    res.json({msg : "User Created" , token : token , username : req.username});        
}


module.exports = signup ; 