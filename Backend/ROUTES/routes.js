const express = require('express');  
const signup = require('../Functions/signup');
const login = require('../Functions/login');
const authenticate = require('../authenticate');
const addnotes = require('../Functions/addnotes');
const getnotes = require('../Functions/getnotes');
const updatecontent = require('../Functions/updatecontent');
const router = express.Router();     


router.post('/signup' , signup); 
router.post('/login' , login); 
router.post ('/notes' , authenticate , addnotes)
router.get('/getnotes' , authenticate , getnotes)
router.put ('/update' , authenticate , updatecontent)

module.exports = router; 