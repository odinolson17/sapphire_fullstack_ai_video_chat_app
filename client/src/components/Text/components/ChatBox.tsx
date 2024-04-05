import { randomIDwithLetters } from '../../../functions/randomID';
import { Socket } from 'socket.io-client'
import { useEffect, useState } from 'react';

interface Props {
  socket: Socket;
  name: string;
  room: string;
}

interface messageDataObj {
  room: string;
  name: string;
  message: string;
  time: string;
  chatID: string;
}

function ChatBox ({ socket, name, room }: Props) {

  const [currMessage, setCurrMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<messageDataObj[]>([]);

  const sendMessage = async () => {
    if (currMessage !== "") {
      const messageData: messageDataObj = {
        room: room,
        name: name,
        message: currMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
        chatID: randomIDwithLetters()
      }

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData])

      setCurrMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    })
  }, [socket]);

  return (
    <>
      <div>
        <p>Live Chat</p>
      </div>
      <div>
        {messageList.map((messageContent) => (
          <div
            key={messageContent.chatID}
          >
            <p>{messageContent.name}</p>
            <p>{messageContent.message}</p>
            <p>{messageContent.time}</p>
          </div>
        ))}
      </div>
      <div>
        <input 
          value={currMessage}
          onChange={(e) => setCurrMessage(e.target.value)}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </>
  )
}

export default ChatBox;