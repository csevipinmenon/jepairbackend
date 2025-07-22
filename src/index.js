import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://jepair-bazaar-v5at.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const userSocketMap = {}; // { email: socket.id }

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("joinRoom", ({ email }) => {
    userSocketMap[email] = socket.id;
    socket.join(email);
    console.log(`User with email ${email} joined room.`);
  });

  socket.on("sendMessage", ({ from, to, message }) => {
    console.log("User to admin:", message);
    io.to(to).emit("receiveMessage", { from, message }); // send to admin
  });

  socket.on("adminMessage", ({ from, to, message }) => {
    const userSocket = userSocketMap[to];
    if (userSocket) {
      io.to(userSocket).emit("receiveMessage", { from, message }); // send to user
    }
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
    for (const email in userSocketMap) {
      if (userSocketMap[email] === socket.id) {
        delete userSocketMap[email];
      }
    }
  });
});

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
