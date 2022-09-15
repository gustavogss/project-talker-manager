const express = require('express');
const { StatusCodes } = require('http-status-codes');

const fs = require('fs');

const router = express.Router();
const DB = './src/talker.json';

const {   
  tokenValidated,  
} = require('../middleware'); 

module.exports = router.get('/search', 
tokenValidated, 

async (req, res, next) => {  
  try {    
    const { q } = req.query;    
    const data = JSON.parse(fs.readFileSync(DB, 'utf8'));
    const filterTalker = data.filter((talker) => talker.name.includes(q)); 
    console.log(filterTalker); 
    return res.status(StatusCodes.OK).json(filterTalker);                 
  } catch (error) {
    return next(error);
  }
});  