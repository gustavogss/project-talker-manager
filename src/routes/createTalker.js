// StatusCodes - é uma lib do npm, https://www.npmjs.com/package/http-status-codes

const express = require('express');
const { StatusCodes } = require('http-status-codes');
const fs = require('fs');

const {   
  tokenValidated,
  nameValidated, 
  ageValidated, 
  talkValidated, 
  rateValidated,  
  dateValidated,
} = require('../middleware');

const router = express.Router();
const DB = './src/talker.json';

module.exports = router.post('/', 
tokenValidated,
nameValidated, 
ageValidated, 
talkValidated, 
rateValidated, 
dateValidated,
async (req, res, next) => {
  try {  
  const newTalker = req.body;
  const data = JSON.parse(fs.readFileSync(DB, 'utf8'));
  const id = data.sort((a, b) => b.id - a.id)[0].id + 1;
  data.push({ id, ...newTalker });
  fs.writeFileSync(DB, JSON.stringify(data));
  return res.status(StatusCodes.CREATED).json({ id, ...newTalker });
  } catch (error) {
    next(error);
  }
}); 
