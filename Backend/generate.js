const jwt =  require('jsonwebtoken'); 
const jwtpass = process.env.JWT_SECRET; 


function generateToken (person) {

    return jwt.sign({username : person.username}, jwtpass );      
 } 


 module.exports = generateToken; 