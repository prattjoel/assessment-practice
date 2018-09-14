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
  }
}

module.exports = UserController
