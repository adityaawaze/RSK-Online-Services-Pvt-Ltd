import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/Blog.css'; // Import your CSS file for styling
import "@fontsource/montserrat";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs') // Update this URL if your backend runs elsewhere
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  const categories = ["All Posts", "Industry Trends", "Product Updates", "Growth Tips"];

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  const handleCardClick = (category) => {
    setActiveCategory(category);
  };

  const filteredBlogs =
    activeCategory === "All Posts"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section className="blog">
      <h2>
        Our <span>Blogs</span>
      </h2>
      <p className="blog-subtitle">Tech Trends & Innovations</p>
      <p className="blog-description">
        Stay ahead in the world of digital payments, API Solutions and cutting-edge software development. <br />
        Explore expert insights, company updates and the latest tech trends shaping the future.
      </p>

      <div className="blog-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab ${activeCategory === category ? "active" : ""}`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <h3 className="featured-heading">Featured Articles</h3>

      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <div
            key={blog._id} // use _id if from MongoDB, otherwise keep blog.id
            className="blog-card"
            onClick={() => handleCardClick(blog.category)}
          >
            <div className="blog-image-placeholder" />
            <p className="blog-meta">
              {blog.category} • {blog.date}
            </p>
            <h4 className="blog-title">{blog.title}</h4>
            <p className="blog-snippet">{blog.snippet}</p>
            <div className="blog-author">
              <span role="img" aria-label="author">👤</span> {blog.author}
            </div>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
