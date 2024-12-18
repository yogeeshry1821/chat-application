# WebSocket Chat Application
A real-time chat application built with React, TypeScript, and a Node.js WebSocket server. Users can join predefined rooms and exchange messages instantly.

## Features
- Real-time chat functionality using WebSocket.
- Room-based message segregation.
- Dynamic UI updates with React and Tailwind CSS.
- TypeScript for strict typing and maintainability.


## Getting Started
- Follow these instructions to set up the project locally and start the application.

### Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher)
npm or yarn
WebSocket-compatible client (e.g., modern web browsers)

### Installation
#### Clone the Repository

```
  git clone https://github.com/your-username/websocket-chat-app.git
  cd websocket-chat-app
  Install Dependencies
```
#### For the frontend:
```
  cd frontend
  npm install
```
#### For the backend:
```
  cd backend
  npm install
```
#### Environment Variables

Create .env files in both frontend and backend directories with appropriate variables:
Frontend .env:
env
```
REACT_APP_WEBSOCKET_URL=ws://localhost:8080
```
Backend .env (optional for scaling):
env
```
  PORT=8080
```
Running the Application
Start the Backend
```
  cd backend
  npm start
```
Start the Frontend

```
  cd frontend
  npm run dev
```

Open the application in your browser:

- http://localhost:3000

## Usage - Pretty intuitive
##### Frontend
Enter a message in the input box.
Click the Send button to send the message.
Messages from all users in the same room will appear in the chat interface.
##### Backend
Clients connect to ws://localhost:8080.
Handles user join requests and broadcasts messages to all users in the same room.
API Contracts
Frontend to Backend

Join Room
<details>
  <summary>
  More details for the working of the code
</summary>
Send Chat Message:

Payload:
```
  {  
    "type": "chat",
    "payload": {
      "message": "Your message here"
    }
  }
```
Join Room ;

Payload:
```
  {
    "type": "join",
    "payload": {
      "roomId": "roomName"
    }
  }
```
</details>
Backend to Frontend
Sends raw chat messages to all clients in the same room.

## Built With
### Frontend:
- React
- TypeScript
- Tailwind CSS
- Backend:
- Node.js
- ws library for WebSocket support

## Contributing
Contributions are welcome! Please follow these steps:

### Fork the repository.
- Create a new branch (feature/my-feature).
- Commit your changes (git commit -m 'Add my feature').
- Push to the branch (git push origin feature/my-feature).
- Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgments
Inspired by real-time chat applications along with lessons from Harkirat Singh. Twitter -https://x.com/kirat_tw
Thanks to the contributors and open-source community.
