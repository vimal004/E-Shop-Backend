const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://e-shop-gamma-sepia.vercel.app", // Replace with your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true, // Enable cookies
  },
});

app.get("/", (req, res) => {
  res.send("Socket.IO server is running");
});

// When a new client connects
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for incoming chat messages
  socket.on("message", (data) => {
    console.log("Message from client:", data);

    // Broadcast the message to all connected clients (or agents)
    io.emit("message", data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log("Socket.IO server running on port", port);
});
