import express, { Express } from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const port: number = 4000;
const app: Express = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // origin: "http://localhost:3000",
    origin: "*",
    methods: ["GET", "POST"]
  },
});

io.on("connection", (socket) => {
  // trigged by the front end
  socket.on("join_room", (roomid) => {
    socket.join(roomid);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  })

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Web Sockets Server running on Port: ${port}`);
})

