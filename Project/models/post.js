const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  content: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post
