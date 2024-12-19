// Blogs.model.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
  imageUrl2: { type: String, default: "" },
  date: { type: String, required: true },
  views: { type: Number, default: 0 }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
