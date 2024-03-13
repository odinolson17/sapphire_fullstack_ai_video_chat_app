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
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
});

server.listen(port, () => {
  console.log(`Web Sockets Server running on Port: ${port}`);
})

