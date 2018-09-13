const User = require('../Model/UserModel');

const UserController = {
  createUser(req, res) {
    const user = new User({
      firstName: 'testFirst',
      lastName: 'tesLast'
    })

    user.save( (err, user) => {
      if (err) return console.error(err);
      res.send({user})
    })
  }
}

module.exports = UserController
