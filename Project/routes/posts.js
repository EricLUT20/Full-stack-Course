const express = require("express")
const router = express.Router()
const Post = require("../models/post")
const User = require("../models/user")
const passport = require("passport")

// Create a post
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const content = req.body.content
      const userId = req.body.owner

      console.log(req.body.content, req.body.owner)

      const newPost = new Post({ content, owner: userId })

      const savedPost = await newPost.save()
      res.json(savedPost)
    } catch (error) {
      console.error(error)
      return res.json({ success: false, msg: "Error creating post" })
    }
  }
)

// Get all posts
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.find().populate("owner", "username")
    res.json(allPosts)
  } catch (error) {
    console.error(error)
    return res.json({ success: false, msg: "Error fetching posts" })
  }
})

// Get posts for a specific user
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId

    const user = await User.findById(userId)
    if (!user) {
      return res.json({ success: false, msg: "User not found" })
    }

    const userPosts = await Post.find({ owner: userId })
    res.json(userPosts)
  } catch (error) {
    console.error(error)
    return res.json({ success: false, msg: "Error fetching posts" })
  }
})

module.exports = router
