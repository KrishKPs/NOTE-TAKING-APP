const jwt = require('jsonwebtoken');     

const jwtpass = process.env.JWT_SECRET;  

function authenticate (req,res , next) {


    const token = req.headers.authorization; 

    if(!token){
        res.status(401).json({msg : "No Token Provided"}); 
        return; 
    }

    try {

        const decode = jwt.verify(token, jwtpass);   
        req.username = decode.username;  
        next(); 
    } catch (error) {
        res.status(401).json({msg : "Invalid Token"}); 
        return; 
    } 
}

module.exports = authenticate;   