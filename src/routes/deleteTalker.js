const express = require('express');
const { StatusCodes } = require('http-status-codes');

const fs = require('fs');

const router = express.Router();
const DB = './src/talker.json';

const {   
  tokenValidated,  
} = require('../middleware'); 

module.exports = router.delete('/:id', 
tokenValidated,  
async (req, res, next) => {  
  try {   
    const { id } = req.params;
  const data = JSON.parse(fs.readFileSync(DB, 'utf8'))
    .filter((talk) => talk.id !== Number(id));

  fs.writeFileSync(DB, JSON.stringify(data));
  return res.sendStatus(StatusCodes.NO_CONTENT); 
  } catch (error) {
    return next(error);
  }
}); 
