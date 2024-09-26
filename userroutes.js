const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
const nodecache = require("node-cache");
const userrouter = express.Router();
userrouter.use(express.json());
const myCache = new nodecache();

// User Schema
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

// Cart Schema
const cartSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  items: [
    {
      product_name: {
        type: String,
        required: true, 
        unique: true,
      },
      price: String,
      rating: String,
      features: [String],
      image_link: String,
      qty: Number,
    },
  ],
});

// Data Schema
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

const Cart = mongoose.model("Cart", cartSchema);
const Data = mongoose.model("Data", dataSchema);
const User = mongoose.model("User", userSchema);

// Routes
userrouter.post("/data", async (req, res) => {
  const dat = await Data.create(req.body);
  res.send(dat);
});

userrouter.get("/data", async (req, res) => {
  if (myCache.has("data")) {
    return res.send(myCache.get("data"));
  }
  const dat = await Data.find();
  myCache.set("data", dat, 300);
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
  const { email, ...itemData } = req.body;

  try {
    // Check if the cart exists for the user
    let cart = await Cart.findOne({ email });

    if (cart) {
      // If the cart exists, add the item to the items array
      cart.items.push(itemData);
      await cart.save();
      return res.status(200).send(cart);
    } else {
      // If the cart does not exist, create a new cart document
      cart = new Cart({ email, items: [itemData] });
      await cart.save();
      return res.status(201).send(cart);
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to add item to cart", details: error.message });
  }
});

userrouter.post("/getcart", async (req, res) => {
  try {
    const cart = await Cart.findOne({ email: req.body.email });
    if (cart) {
      res.status(200).send(cart.items);
    } else {
      res.status(404).send("Cart not found");
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to retrieve cart items", details: error.message });
  }
});

userrouter.post("/itemexists", async (req, res) => {
  try {
    const cart = await Cart.findOne({ email: req.body.email });
    if (cart) {
      const items = cart.items.filter(
        (item) => item.product_name === req.body.product_name
      );
      if (items.length > 0) {
        res.status(200).send(items);
      } else {
        res.status(404).send("Item not found in the cart");
      }
    } else {
      res.status(404).send("Cart not found");
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to retrieve cart items", details: error.message });
  }
});

userrouter.delete("/deletecart", async (req, res) => {
  const { email, product_name } = req.body;

  try {
    const cart = await Cart.findOne({ email });

    if (cart) {
      cart.items = cart.items.filter(
        (item) => item.product_name !== product_name
      );
      await cart.save();
      res.send(cart);
    } else {
      res.status(404).send("Cart not found");
    }
  } catch (error) {
    res.status(500).send({
      error: "Failed to delete item from cart",
      details: error.message,
    });
  }
});

userrouter.delete("/deleteall", async (req, res) => {
  const { email } = req.body;

  try {
    const response = await Cart.deleteOne({ email });
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to delete all items", details: error.message });
  }
});

userrouter.put("/address", async (req, res) => {
  try {
    const response = await User.findOneAndUpdate(
      { email: req.body.email },
      { address: req.body.address },
      { new: true } // To return the updated document
    );
    res.send("Address Updated");
  } catch (error) {
    res.status(500).send("Error updating address");
  }
});

userrouter.post("/address", async (req, res) => {
  const response = await User.findOne(req.body);
  res.send(response);
});

userrouter.put("/qty", async (req, res) => {
  const { email, product_name, qty } = req.body;

  try {
    const cart = await Cart.findOne({ email });
    if (cart) {
      const item = cart.items.find(
        (item) => item.product_name === product_name
      );
      if (item) {
        item.qty = qty;
        await cart.save();
        res.send(item);
      } else {
        res.status(404).send("Item not found in the cart");
      }
    } else {
      res.status(404).send("Cart not found");
    }
  } catch (error) {
    res.status(500).send("Error updating quantity");
  }
});

module.exports = userrouter;
