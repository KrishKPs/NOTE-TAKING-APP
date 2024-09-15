
require('dotenv').config(); 
const mongoose = require('mongoose');    

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to MongoDB')) 
.catch(err => console.error('Could not connect to MongoDB', err));   

const userSchema = mongoose.Schema({

    Name : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    Email : {
        type: String,
        required: true
    },
    Password : {
        type: String,
        required: true
    },
    Date : {
        type: Date,
        default: Date.now
    },
}
)
const NoteSchema = mongoose.Schema({

    Username : {
        type: String,    
        ref : 'User', 
        required: true 
    }, 

    Title : {
        type: String,
        required: true
    },
    Content : {
        type: String,
        required: true
    },
    Date : {
        type: Date,
        default: Date.now
    }
    // Tags: {
    //     type: [String],  
    //     default: []  
    // }

})

const user = mongoose.model('User', userSchema); 
const note = mongoose.model('Notes', NoteSchema);     


module.exports = {
    user : user, 
    note : note  
}