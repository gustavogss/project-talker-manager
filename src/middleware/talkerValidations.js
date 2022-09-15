// Regex => https://support.dooblo.net/hc/en-us/articles/208295925-How-To-Validate-Date-Format-Using-Regular-Expression

const { StatusCodes } = require('http-status-codes');

const nameValidated = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length <= 3) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const ageValidated = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O campo "age" é obrigatório',
    });
  }

  if (age < 18) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const tokenValidated = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req.headers);
  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED)
    .json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res.status(StatusCodes.UNAUTHORIZED)
    .json({ message: 'Token inválido' });
  }
  next();
};

const talkValidated = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O campo "talk" é obrigatório',
    });
  }
  next();
};

const dateValidated = (req, res, next) => {
  const dateFormat = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([12][0-9]{3})$/g;
  const { talk: { watchedAt }, 
} = req.body;
  
  if (!watchedAt) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O campo "watchedAt" é obrigatório',
    });
  }

  if (!watchedAt.match(dateFormat)) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};

const rateValidated = (req, res, next) => {
  const { talk: { rate }, 
} = req.body;

if (rate < 1 || rate > 5) {
  return res.status(StatusCodes.BAD_REQUEST)
  .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5',
  });
}  
  if (!rate) { 
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: 'O campo "rate" é obrigatório' });
  } 
  next();
};

module.exports = {
  tokenValidated,
  nameValidated,
  ageValidated,
  dateValidated,
  rateValidated,
  talkValidated,
};
