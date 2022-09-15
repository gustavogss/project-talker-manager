const express = require('express');
const crypto = require('crypto');
const { StatusCodes } = require('http-status-codes');
const { 
  emailValidated, 
  passwordValidated, 
} = require('../middleware');

const router = express.Router();

module.exports = router.post('/', 
emailValidated, 
passwordValidated,
(req, res, next) => {
  try {     
    const token = crypto.randomBytes(8).toString('hex');      
    return res.status(StatusCodes.OK).json({ token });  
  } catch (e) {
    return next(e);
  }
}); 