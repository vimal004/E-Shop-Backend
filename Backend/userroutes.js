const express = require("express");
const mongoose = require("mongoose");
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
      validator: (v) => validator.isEmail(v),
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  address: {
    type: String,
    minlength: [6, "Address must be at least 6 characters long"],
  },
});

const itemSchema = new mongoose.Schema({
  product_name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  image_link: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  qty: {
    type: Number,
  },
});

const dataSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  product_name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  image_link: {
    type: String,
    required: true,
  },
});

const Data = mongoose.model("Data", dataSchema);
const Item = mongoose.model("Item", itemSchema);
const User = mongoose.model("User", userSchema);

userrouter.post("/data", async (req, res) => {
  const dat = await Data.create(req.body);
  res.send(dat);
});

userrouter.get("/data", async (req, res) => {
  const dat = await Data.find();
  res.send(dat);
});

userrouter.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const response = await newUser.save();
    res.status(201).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to create user", details: error.message });
  }
});

userrouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(401).send("Invalid User Credentials");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

userrouter.post("/addcart", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const result = await newItem.save();
    res.status(201).send(result);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to add item to cart", details: error.message });
  }
});

userrouter.post("/getcart", async (req, res) => {
  try {
    const items = await Item.find(req.body);
    res.status(200).send(items);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to retrieve cart items", details: error.message });
  }
});

userrouter.post("/itemexists", async (req, res) => {
  try {
    const items = await Item.find(req.body);

    if (items.length > 0) res.status(200).send(items);
    else {
      res.status(404).send("Item not found in the cart");
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to retrieve cart items", details: error.message });
  }
});

userrouter.delete("/deletecart", async (req, res) => {
  try {
    const { email, product_name } = req.body;
    const response = await Item.deleteOne(req.body);
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to retrieve cart items", details: error.message });
  }
});

userrouter.delete("/deleteall", async (req, res) => {
  try {
    const response = await Item.deleteMany(req.body);
    res.send(response);
  } catch (error) {
    res.send({ error: "Failed to delete all items", details: error.message });
  }
});

userrouter.put("/address", async (req, res) => {
  try {
    const response = await User.findOneAndUpdate(
      { email: req.body.email },
      {
        address: req.body.address,
      }
    );
    console.log("Address Updated");
    res.send("Address Updated");
  } catch (error) {
    console.log("Error posting addresss");
    res.send("error");
  }
});

userrouter.post("/address", async (req, res) => {
  const response = await User.findOne(req.body);
  res.send(response);
});

userrouter.put("/qty", async (req, res) => {
  const data = await Item.findOneAndUpdate(
    { product_name: req.body.product_name, email: req.body.email },
    {
      qty: req.body.qty,
    }
  );
  res.send(data);
});

module.exports = userrouter;
