import {WebSocketServer,WebSocket} from "ws"

const wss = new WebSocketServer({ port: 8080 })

interface User{
    room:string;
    socket:WebSocket;
}
let allConnectedUsers:User[]=[];
wss.on('connection', (socket)=>{
   socket.on("message",(message)=>{
    const parsedMessage = JSON.parse(message as unknown as string);
    if(parsedMessage.type=="join"){
        console.log("a user joined the room " + parsedMessage.payload.roomId);
        allConnectedUsers.push({
            socket,
            room:parsedMessage.payload.roomId
        })

    }
    if(parsedMessage.type=="chat"){
        let currentUserRoom=null;
        for(let i=0;i<allConnectedUsers.length;i++){
            if(allConnectedUsers[i].socket==socket){
                currentUserRoom=allConnectedUsers[i].room;
            }
        }
        for(let i=0;i<allConnectedUsers.length;i++){
            if(allConnectedUsers[i].room==currentUserRoom){
                allConnectedUsers[i].socket.send(parsedMessage.payload.message)
            }
        }
    }
   })
})
console.log('hi')
