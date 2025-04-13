const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  snippet: String,
  content: String,
  author: String,
  date: String,
  category: String,
});

module.exports = mongoose.model('Blog', blogSchema);
