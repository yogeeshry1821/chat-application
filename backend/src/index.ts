import {WebSocketServer} from "ws"

const wss = new WebSocketServer({ port: 8080 })
wss.on('connection', (socket)=>{
    console.log('a user connected')
    socket.on('message',()=>{
        console.log('message Recieved')
    })
})
console.log('hi')
