import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Admin.css';

const EditBlog = ({ blogs, onUpdate }) => {
  const { id } = useParams();
  const existingBlog = blogs.find((b) => b.id === Number(id));
  const [form, setForm] = useState({ ...existingBlog });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
  };

  if (!form) return <p>Blog not found</p>;

  return (
    <div className="blog-form-container">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} />
        <textarea name="snippet" value={form.snippet} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="Product Updates">Product Updates</option>
          <option value="Industry Trends">Industry Trends</option>
          <option value="Growth Tips">Growth Tips</option>
        </select>
        <input name="author" value={form.author} onChange={handleChange} />
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
