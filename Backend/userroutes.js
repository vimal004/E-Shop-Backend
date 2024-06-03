const express = require("express");
const mongoose = require("mongoose");
const { type } = require("os");
const validator = require("validator");
const userrouter = express.Router();
userrouter.use(express.json());

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

const itemSchema = new mongoose.Schema({
  product_name: {
    type: String,
    unique: true,
  },
  price: String,
  rating: String,
  features: [String],
  image_link: String,
  email: String,
});

const Item = new mongoose.model("Item", itemSchema);

const User = new mongoose.model("User", userSchema);

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

userrouter.post("/addcart", async (req, res) => {
  const resu = await new Item(req.body);
  const result = await resu.save();
  console.log(result);
  res.send(result);
});

userrouter.post("/getcart", async(req, res) => {
  const resp = await Item.find(req.body);
  res.send(resp);
})


module.exports = userrouter;
