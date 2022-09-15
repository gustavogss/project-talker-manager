const { StatusCodes } = require('http-status-codes');

const emailValidated = (req, res, next) => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
  const { email } = req.body;
 
  if (!email) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!emailRegex.test(email)) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const passwordValidated = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = { 
  emailValidated,
  passwordValidated,
};