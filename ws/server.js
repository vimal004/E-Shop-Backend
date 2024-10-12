const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());

// Create HTTP server
const server = createServer(app);

// Create a Socket.IO server and pass the HTTP server to it
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST"],
  },
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Handle socket connection
io.on("connection", (socket) => {
  console.log("a user connected with id: " + socket.id);

  // Listen for "message" event
  socket.on("message", (msg) => {
    console.log(msg);
    io.emit("message", msg); // Broadcast the message to all clients
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("user disconnected: " + socket.id);
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});
