// src/services/blogService.js
const BLOG_STORAGE_KEY = 'blogs';

export const getBlogs = () => {
  return JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY)) || [];
};

export const saveBlog = (blog) => {
  const blogs = getBlogs();
  blog.id = Date.now(); // Unique ID
  blogs.push(blog);
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(blogs));
};

export const updateBlog = (updatedBlog) => {
  const blogs = getBlogs().map((b) => (b.id === updatedBlog.id ? updatedBlog : b));
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(blogs));
};

export const deleteBlog = (id) => {
  const blogs = getBlogs().filter((b) => b.id !== id);
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(blogs));
};

export const getBlogById = (id) => {
  return getBlogs().find((b) => b.id === id);
};
