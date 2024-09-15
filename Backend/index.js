require('dotenv').config();  
const express = require('express');  
const app = express();   
const PORT = process.env.PORT || 3000; 
const cors = require('cors');  
const db = require('./db');  

const mainRouter = require('./ROUTES/routes');   


app.use(express.json()); 
app.use(cors()); 

app.use('/user' , mainRouter);



app.listen(PORT , () => {console.log(`Server is running on port ${PORT}`)});     
