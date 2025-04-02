const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/Post");
const categoryRoutes = require("./routes/Category");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors())

// use Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("server is running at port 4000");
});
