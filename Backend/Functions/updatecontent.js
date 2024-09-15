const { note } = require("../db");


async function updatecontent (req,res){

    const username = req.username;  
    const notes = req.body; 

    console.log(notes); 
    console.log(username);
    
    //title , content 

    const noteExists = await note.updateOne(
        {Username: username ,Title : notes.Title  } 
        , {Content : notes.Content}
        ); 
    
    if (noteExists.modifiedCount === 0) {
        return res.status(404).json({ msg: "Note Not Found or No Changes Made" });
    }

    res.json({msg : "Note Updated"});   


}

module.exports = updatecontent; 