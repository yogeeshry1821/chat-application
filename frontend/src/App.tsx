import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState<string[]>(["hi there", "hello bro"]);
  const [input, setInput] = useState<string>('');
  const wsRef = useRef<WebSocket | null>(null); // Explicit typing

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // Use ws:// for WebSocket connections

    ws.onopen = () => {
      console.log("WebSocket connected");
      ws.send(
        JSON.stringify({
          type: "join",
          payload: { roomId: "red" },
        })
      );
    };

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    wsRef.current = ws;

    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim() && wsRef.current) { // Null check for wsRef.current
      wsRef.current.send(
        JSON.stringify({
          type: 'chat',
          payload: { message: input },
        })
      );
      setInput(''); // Clear input after sending
    }
  };

  return (
    <div className="bg-black h-screen text-white flex flex-col">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className="py-2 my-3.5">
            <span className="bg-white text-black p-3 rounded-md">
              {message}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full bg-white p-4 space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 bg-gray-100 text-black border-2 rounded-md border-black"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-white px-5 py-3 border-2 rounded-md border-black text-black"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
