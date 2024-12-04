import WebSocket from "ws"

const wss = new WebSocket.Server({ port: 8080 })
wss.on('connection',function socket(){
    console.log('a user connected')
    socket.on('message', function incomingMessage(message) {
        console.log('received: %s', message)
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message)
            }
        })
    })
})
console.log('hi')
