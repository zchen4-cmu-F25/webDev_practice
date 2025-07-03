import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 3000 });
console.log("WebSocket Server is listening on port 3000, waiting for connections...");

wss.on("connection", (ws) => {
    console.log("Connection to Client Established!");

    ws.on("message", (msg) => {
        ws.send("Iron Man " + msg);
    });

    ws.on("close", () => {
        console.log("Connection to Client Closed!");
    });
});
