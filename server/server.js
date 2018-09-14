const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const UserController = require('./UserController');
const app = express();

app.use(express.static('client'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
})

app.get('/allUsers', UserController.getAllUsers)

app.post('/user', UserController.createUser)

app.listen(3000, () => {
  console.log('listening to 3000');
})
