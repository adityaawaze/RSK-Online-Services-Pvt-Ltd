import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = ({ blogs = [], onDelete = () => {} }) => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={() => navigate('/admin/add')}>Add New Blog</button>

      <div className="admin-blog-list">
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="admin-blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.category} • {blog.date}</p>
              <div className="admin-btns">
                <button onClick={() => navigate(`/edit-blog/${blog.id}`)}>Edit</button>
                <button className="danger" onClick={() => onDelete(blog.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
