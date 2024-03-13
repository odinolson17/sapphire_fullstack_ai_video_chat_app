import io from 'socket.io-client';
import { useEffect, useState } from 'react';
const socket = io('http://localhost:4000');

function Text () {

  const [message, setMessage] = useState<string>("");
  const [messageReceived, setMessageReceived] = useState<string>("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // triggers the socket in the backend
    socket.emit("send_message", {
      message
    });
    const inputSearch = (document.getElementById("input") as HTMLInputElement | null);
    if (inputSearch) inputSearch.value = "";
  }

  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessageReceived(data.message);
    })
  }, []);

  return (
    <>
      <input id="input" onChange={(e) => { setMessage(e.target.value) }}/>
      <button onClick={sendMessage}>Send Message</button>
      <br /><br />
      { 0 < messageReceived.length && messageReceived }
    </>
  )
}

export default Text;