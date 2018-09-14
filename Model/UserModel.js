const mongoose = require('mongoose');
const info = require('../.dbinfo')
// mongoose.connect('mongodb://localhost/practice-app');
mongoose.connect(`mongodb://${info.use}:${info.pword}@ds257752.mlab.com:57752/practice-app`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('mongodb connected');
})

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
