const express = require('express');
const bodyParser = require('body-parser');
const { 
getAllTalkers, 
getTalkerById, 
createTalker, 
login, 
editTalker, 
deleteTalker,
searchTalker,
} = require('./routes');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', 
searchTalker, 
getAllTalkers, 
getTalkerById, 
createTalker, 
editTalker, 
deleteTalker);

app.use('/login', login);
// app.use('/talker', editTalker);
// app.use('/talker', deleteTalker);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
