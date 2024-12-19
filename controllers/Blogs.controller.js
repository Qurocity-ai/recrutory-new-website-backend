// Blogs.controller.js
const Blog = require("../models/Blogs.model");
const { ObjectId } = require("mongodb");

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).lean();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get blog by ID and increment views
const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;

    // Check if the provided ID is valid
    if (!ObjectId.isValid(blogId)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Find and update blog by ID, increment views
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { $inc: { views: 1 } },
      { new: true, upsert: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const formData = req.body;
    formData.date = getCurrentDate();
    formData.views = 1;

    const newBlog = new Blog(formData);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update blog by ID
const updateBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const updates = req.body;

    // Check if the provided ID is valid
    if (!ObjectId.isValid(blogId)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(blogId, updates, {
      new: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Update successful", updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete blog by ID
const deleteBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;

    // Check if the provided ID is valid
    if (!ObjectId.isValid(blogId)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Helper function to get current date
function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNames = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  return `${day} ${month} ${year}`;
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlogById,
  deleteBlogById
};
