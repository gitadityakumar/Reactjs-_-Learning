import './App.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {nanoid} from 'nanoid';

const socket = io.connect('http://localhost:4500');
const userName = nanoid(4)

function App() {
  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit('chat', { msg , userName});
    setMsg('');
  };

  useEffect(() => {
    socket.on('chat', (payload) => {
      setChat([...chat, payload]);
    });
  }, [chat]); // Add chat as a dependency to the useEffect hook

  return (
    <div className="App">
      <header className="App-header">
        <h1>ChitChat</h1>
        {chat.map((payload, index) => {
          return <p key={index}>{payload.msg}:<span>id:{userName}</span></p>;
        })}
        <form onSubmit={sendChat}>
          <input
            type="text"
            name="chat"
            placeholder="send text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
