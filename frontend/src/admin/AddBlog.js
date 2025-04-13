import React, { useState } from 'react';
import './Admin.css';

const AddBlog = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    snippet: '',
    category: 'Product Updates',
    author: '',
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now() });
  };

  return (
    <div className="blog-form-container">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="snippet" placeholder="Snippet" onChange={handleChange} required />
        <select name="category" onChange={handleChange} required>
          <option value="Product Updates">Product Updates</option>
          <option value="Industry Trends">Industry Trends</option>
          <option value="Growth Tips">Growth Tips</option>
        </select>
        <input name="author" placeholder="Author" onChange={handleChange} required />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
