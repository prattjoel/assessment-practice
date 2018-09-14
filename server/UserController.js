const User = require('../Model/UserModel');

const UserController = {
  createUser(req, res) {
    console.log('body', req.body);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    })
    user.save( (err, user) => {
      if (err) return console.error(err);
      res.send({user})
    })
  },
  getAllUsers(req, res) {
    User.find((err, users) => {
      if (err) return console.error(err);
      console.log({users});
      res.send(users)
    })
  },
  updateUser(req, res) {
    const query = { firstName: req.body.name }
    User.findOneAndUpdate(query, {firstName: req.body.newName}, (err, user) => {
      if (err) return console.error(err);
      console.log({user});
      res.send(user)
    })
  },
  deleteUser(req, res) {
    const query = { firstName: req.body.name };
    User.deleteOne(query, (err) => {
      if (err) return console.error(err);
      res.send({data: 'data'})
    })
  }
}

module.exports = UserController
