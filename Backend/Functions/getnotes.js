const { note } = require("../db");

async function getnotes (req,res) {

   const username = req.username; 

   const notes = await note.find({Username : username});  
   
    res.json({
        notes : notes    
    });     
}

module.exports = getnotes; 