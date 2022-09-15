const express = require('express');
const { StatusCodes } = require('http-status-codes');

const fs = require('fs');

const router = express.Router();
const DB = './src/talker.json';

module.exports = router.get('/:id', async (req, res, next) => {  
  try { 
    const { id } = req.params; 
    const data = await JSON.parse(fs.readFileSync(DB, 'utf8'));
    const talkerId = data.find((talker) => talker.id === Number(id));
    if (talkerId) {
      return res.status(StatusCodes.OK).json(talkerId);       
    } return res.status(StatusCodes.NOT_FOUND)
    .json({ message: 'Pessoa palestrante não encontrada' });     
  } catch (error) {
    return next(error);
  }
}); 
