// const { emailValidated, passwordValidated } = require('./loginValidations');
const { emailValidated, passwordValidated } = require('./loginValidations');
const { 
  tokenValidated,
  nameValidated, 
  ageValidated, 
  talkValidated, 
  rateValidated, 
  dateValidated,  
} = require('./talkerValidations');

module.exports = { 
  emailValidated,
  passwordValidated,
  tokenValidated,
  nameValidated, 
  ageValidated, 
  talkValidated, 
  rateValidated, 
  dateValidated,   
};