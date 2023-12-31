const express = require("express")
const router = express.Router()
const passport = require("passport")
const jwt = require("jsonwebtoken")
const config = require("../config/database")

const User = require("../models/user")

// Register
router.post("/register", async (req, res, next) => {
  try {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    })

    await User.addUser(newUser)
    res.json({ success: true, msg: "User registered" })
  } catch (err) {
    console.error(err)
    res.json({ success: false, msg: "Failed to register user" })
  }
})

// Auth
router.post("/authenticate", async (req, res, next) => {
  try {
    const username = req.body.username
    const password = req.body.password

    const user = await User.getUserByUsername(username)

    if (!user) {
      return res.json({ success: false, msg: "User not found" })
    }

    const isMatch = await User.comparePassword(password, user.password)

    if (isMatch) {
      const token = jwt.sign(user.toJSON(), config.secret, {
        expiresIn: 604800, // 1 Week in seconds
      })

      res.json({
        success: true,
        token: "JWT " + token,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
        },
      })
    } else {
      return res.json({ success: false, msg: "Wrong password" })
    }
  } catch (err) {
    throw err
  }
})

// Profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user })
  }
)

// Search User
router.get("/search/:username", async (req, res, next) => {
  try {
    const user = await User.getUserByUsername(req.params.username)

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" })
    }

    const userDetails = {
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    }
    res.json(userDetails)
  } catch (err) {
    throw err
  }
})

module.exports = router
