import { useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const [messages,setMessages]=useState(["hi there","hello bro"])
  const wsRef=useRef()
  useEffect(()=>{
    const ws=new WebSocket("http://localhost:8080");
    ws.onmessage=(e)=>{
      setMessages([...messages,e.data])
    }
    wsRef.current=ws;
    ws.onopen=()=>{
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"red"
        }
      }))
    }
    return ()=>{
      ws.close();
    }
  })
  return (
    <div className='bg-black h-screen text-white'>
      <br/><br/>
      <div className='h-[90vh]'>
        
        {messages.map((message)=>(
          <div className='py-2 my-3.5'>
            <span className='bg-white text-black m-8 p-3 rounded-md space-y-4'>
              {message}
            </span>
          </div>
        ))}
      </div>
      <div className='flex w-full bg-white p-4 space-x-2'>
        <input type="text" id="message" className='w-full flex-1 p-5 bg-gray-100 text-black border-2 rounded-md border-black ' />
        <button onClick={()=>{
          const message = document.getElementById('message')?.value;
          wsRef.current.send(JSON.stringify({
            type: 'chat',
            payload:{
              message: message
            },
          }));
        }} className='bg-white p-5 border-2 rounded-md border-black text-black'> Send</button>
      </div>
    </div>
  )
}

export default App
