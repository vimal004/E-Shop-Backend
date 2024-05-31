const express = require("express");
const mongoose = require("mongoose");
const { type } = require("os");
const validator = require("validator");
const userrouter = express.Router();
userrouter.use(express.json());

mongoose
  .connect("mongodb+srv://2004vimal:zaq1%40wsx@cluster0.6tktuqx.mongodb.net/")
  .then(() => {
    console.log("Mongo DB Connected!");
  })
  .catch((e) => {
    console.log(e);
  });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    validate: {
      validator: (v) => {
        return validator.isEmail(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
});

const User = mongoose.model("User", userSchema);

userrouter.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const response = await newUser.save();
    res.status(201).send(response);
    console.log(response);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to create user", details: error.message });
    console.error(error);
  }
});

userrouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (user) {
      console.log("User found");
      res.status(200).send(user);
    } else {
      res.status(401).send("Invalid User Credentials");
      console.log("Invalid User Credentials");
    }
  } catch (error) {
    res.status(500).send("Server Error");
    console.log("Server Error:", error.message);
  }
});

module.exports = userrouter;
