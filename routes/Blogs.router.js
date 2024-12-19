const express = require("express");
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlogById,
  deleteBlogById
} = require("../controllers/Blogs.controller");

const BlogRouter = express.Router();

BlogRouter.get("/blogs", getAllBlogs);
BlogRouter.get("/blogs/:id", getBlogById);
BlogRouter.post("/blogs", createBlog);
BlogRouter.patch("/blogs/:id", updateBlogById);
BlogRouter.delete("/blogs/:id", deleteBlogById);

module.exports = BlogRouter;
