import express, { Express } from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const port: number = 4747;
const app: Express = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
});

io.on("connection", (socket) => {
  console.log('Video server is connected!');

  socket.on("join-room", (videoRoomID, userID) => {
    console.log(`A new user: ${userID} joined room: ${videoRoomID}`);
    socket.join(videoRoomID);
    socket.broadcast.to(videoRoomID).emit("user-connected", userID);
  });
});

server.listen(port, () => {
  console.log(`Video Web Sockets Server running on Port: ${port}`);
});