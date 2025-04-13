import React, { useState } from 'react';
import axios from 'axios';
import AddBlog from './AddBlog';

const AddBlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const handleAdd = async (newBlog) => {
    try {
        const res = await axios.post('http://localhost:5000/api/blogs', newBlog);

      setBlogs([...blogs, res.data]); // Update state if needed
      alert('Blog added successfully!');
    } catch (error) {
      console.error('Failed to add blog:', error);
    }
  };

  return <AddBlog onAdd={handleAdd} />;
};

export default AddBlogPage;
