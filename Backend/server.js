const express = require("express");
const router = require("./home");
const userrouter = require("./userroutes");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://2004vimal:zaq1%40wsx@cluster0.6tktuqx.mongodb.net/")
  .then(() => {
    console.log("Mongo DB connected!");
  })
  .catch(() => {
    console.log("Error");
  });

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);
app.use("/api/users", userrouter);

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Listening on port ${port}...`);
});
