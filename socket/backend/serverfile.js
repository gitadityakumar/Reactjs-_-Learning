
const app = require('express')();

const server = require('http').createServer(app);

const io = require("socket.io")(server,{
     cors: {
    origin: "*",
  },
});

io.on("connection",(Socket)=>{
    console.log("what is socket: ",Socket);
    console.log("socket is active to be connected");

    Socket.on("chat",(payload)=>{
        console.log("what is payload ", payload);
        io.emit("chat",payload);
    });
});

server.listen(4500,()=>{
    console.log("server is listening at port 4500...");
});