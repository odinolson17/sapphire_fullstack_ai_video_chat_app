import ChatBox from './textcomponents/ChatBox';

import io from 'socket.io-client';
import { useState } from 'react';
const socket = io('http://localhost:4000');

function Text ({ usersname }: { usersname: string }) {
  let name: string;
  if (usersname === undefined) {
    name = "missingname"
  } else {
    name = usersname;
  }
  const [room, setRoom] = useState<string>("");
  const [showChats, setShowChats] = useState<boolean>(false);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room)
    }
    setShowChats(true);
  };

  return (
    <>
    {showChats 
    ? (
      <ChatBox socket={socket} name={name} room={room} />
    ) 
    : (
      <>
      <h3>Join a Chat Room</h3>
      <input 
        onChange={(e) => setRoom(e.target.value)}
      />
      <br />
      <button onClick={joinRoom}>Join a Room</button>
      </>
    )}
    </>
  )
}

export default Text;