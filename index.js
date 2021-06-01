const express = require('express');

const server = express();

server.use(express.json());

const users = [];

server.get('/users', (request, response) => {
  return response.json(users);
})

server.post('/users/create', (request,response) => {
  const {name, email} = request.body;

  const user = {
    name, email
  }

  users.push(user)

  return response.json(user);
})

server.put('/users/edit/:index', (request, response) => {
  const {index} = request.params;
  const {name, email} = request.body;

  const editedUser = {
    name, email
  }

  users[index] = editedUser

  return response.json(editedUser);
})

server.delete('/users/delete/:index', (request, response) => {
  const {index} = request.params;

  users.splice(index, 1)

  return response.send();
})

server.listen(3333, () => {
  console.log('Servidor iniciado')
})