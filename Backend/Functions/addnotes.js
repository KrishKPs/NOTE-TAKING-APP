const { note } = require("../db");
const { noteSchema } = require("../type");

async function addnotes (req,res) {

    const username = req.username; 
    
    console.log(username); 
    

    const inputnotes = req.body;
    const safenotes = noteSchema.safeParse(inputnotes);  

    if (!safenotes.success) {
        res.status(400).send(safenotes.error); 
        return; 
    }    

    await note.create({
        Username : username, 
       
        Title : inputnotes.Title,
        Content : inputnotes.Content   

    })

    res.json({msg : "Note Created"}); 

}

module.exports = addnotes;   