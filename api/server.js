const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors("*"));
app.use(express.json());

const postRoutes = require("./controllers/posts");

app.use("/posts", postRoutes);

app.get("/", (req, res) => res.json("Welcome"));

module.exports = app;
