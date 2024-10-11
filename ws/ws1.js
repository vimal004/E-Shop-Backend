const { io } = require("socket.io-client");

// Connect to the Socket.IO server
const socket = io("ws://localhost:8080", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Connected to server with ID:", socket.id);

  // Send a message to the server after connection
  socket.emit("message", "Hello from the client!");
});

socket.on("message", (data) => {
  console.log("Message from server:", data);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
