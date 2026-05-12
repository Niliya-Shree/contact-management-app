// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config({ override: true });
// const connectDB = require("./config/db");
// const contactRoutes = require('./routes/contactRoutes');

// connectDB();


// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/api/contacts', contactRoutes);

// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => app.listen(5000, () => console.log("Server started on port 5000")))
// //   .catch(err => console.log("MongoDB connection error:",err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);

// MongoDB connection & server start
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on http://localhost:5000");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
