const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const config = require("../config/database")

//User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const User = (module.exports = mongoose.model("User", UserSchema))

module.exports.getUserById = async function (id) {
  try {
    const user = await User.findById(id)
    console.log(user)
    return user
  } catch (err) {
    throw err
  }
}

module.exports.getUserByUsername = async function (username) {
  try {
    const query = { username: username }
    const user = await User.findOne(query)
    return user
  } catch (err) {
    throw err
  }
}

module.exports.addUser = function (newUser) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return reject(err)
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return reject(err)
        newUser.password = hash
        newUser
          .save()
          .then((user) => resolve(user))
          .catch((err) => reject(err))
      })
    })
  })
}

module.exports.comparePassword = function (candidatePassword, hash) {
  return bcrypt.compare(candidatePassword, hash)
}
