const zod = require('zod');  

const userSchema = zod.object ({

    Name : zod.string(), 
    username : zod.string(),
    Email : zod.string().email(),
    Password : zod.string().min(6), 
    // Date : zod.date().default(() => new Date())  
})

const noteSchema = zod.object({

    Title : zod.string(),    
    Content : zod.string(),  
  
    
})

module.exports = {
    userSchema : userSchema  , 
    noteSchema : noteSchema  

}