import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage.js";
import AboutUs from "../src/pages/AboutUs.js";
import Header from "../src/layouts/Header.js";
import Services from "../src/pages/Services.js";
import Footer from "../src/layouts/Footer.js";
import { Link } from "react-router-dom";
import ContactForm from "../src/pages/ContactUs.js";
import Careers from "../src/pages/Careers.js";
import ContactStepperForm from "./components/ContactStepperForm.js";
import BlogPage from "../src/pages/Blog.js";
import AdminLogin from '../src/admin/AdminLogin.js';
import AdminDashboard from '../src/admin/AdminDashboard';
import AddBlog from '../src/admin/AddBlog';
import EditBlog from '../src/admin/EditBlog';
import AddBlogPage from "../src/admin/AddBlogPage.js";







function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/cst" element={<ContactStepperForm />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="/contact" element={<ContactForm />} />
        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddBlogPage />} /> // ✅ Use AddBlogPage
>
        <Route path="/admin/add-blog" element={<AddBlogPage />} />
        <Route path="/admin/edit/:id" element={<EditBlog />} />
        <Route path="/admin" element={<AdminLogin />} />





      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
