const express = require('express');
const { StatusCodes } = require('http-status-codes');

const fs = require('fs');

const router = express.Router();
const DB = './src/talker.json';

const {   
  tokenValidated,
  nameValidated, 
  ageValidated, 
  talkValidated, 
  rateValidated,  
  dateValidated,
} = require('../middleware'); 

module.exports = router.put('/:id', 
tokenValidated,
  nameValidated, 
  ageValidated, 
  talkValidated, 
  rateValidated,  
  dateValidated,
async (req, res, next) => {  
  try {   
    const { id } = req.params;
    const talker = req.body;
    const data = JSON.parse(fs.readFileSync(DB, 'utf8'))
      .map((talk) => (talk.id === Number(id) ? { id: Number(id), ...talker } : talk));
  
    fs.writeFileSync(DB, JSON.stringify(data));
    return res.status(StatusCodes.OK).json({ id: Number(id), ...talker });    
  } catch (error) {
    return next(error);
  }
}); 
