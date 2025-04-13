const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const blogRoutes = require('./routes/blogs');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Corrected MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
