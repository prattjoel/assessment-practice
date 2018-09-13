const express = require('express');
const path = require('path');
const UserController = require('./UserController');
const app = express();

app.use(express.static('client'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
})

app.get('/user', UserController.createUser)

app.listen(3000, () => {
  console.log('listening to 3000');
})
