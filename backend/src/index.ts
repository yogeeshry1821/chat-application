import {WebSocketServer,WebSocket} from "ws"

const wss = new WebSocketServer({ port: 8080 })
let allConnectedUsers:WebSocket[]=[];
let usercount=0;
wss.on('connection', (socket)=>{
    allConnectedUsers.push(socket);
    usercount++;
    socket.on('message',(message)=>{
        console.log('message Recieved',message.toString());
        allConnectedUsers.forEach((s)=>{
            s.send(message.toString()+" : asdf")
        })
    })
})
console.log('hi')
