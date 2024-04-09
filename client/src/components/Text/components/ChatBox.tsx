import { callStore } from '../../../store/call/callStore';
import { getTime } from '../../../functions/getTime';
import { randomIDwithLetters } from '../../../functions/randomID';
import { Socket } from 'socket.io-client'
import { statusStore, triggerTextStore } from '../../../store/status/statusStore';
import { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import './style.css';

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

  const [, setEndCall] = useRecoilState(callStore);
  const [, setNotActiveCall] = useRecoilState(triggerTextStore);
  const [, setCurrContactsStatus] = useRecoilState(statusStore);

  const [currMessage, setCurrMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<messageDataObj[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (currMessage !== "") {
      const messageData: messageDataObj = {
        room: room,
        name: name,
        message: currMessage,
        time: getTime(),
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

  useEffect(() => {
    if (messageList.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messageList.length])
  
  return (
    <div className='center-content'>
      <div>
        <p>Live Chat</p>
      </div>
      <button onClick={() => {
        setNotActiveCall(false);
        setEndCall({
          name: undefined,
          roomid: undefined
        });
        setCurrContactsStatus(true);
      }}>
        Leave Chat
      </button>
      <div className='message-container'>
        <div>
          {messageList.map((messageContent) => (
            <div
              className='message-component'
              id={name === messageContent.name ? 'self' : 'other'}
              key={messageContent.chatID}
            >

              <div className='split-content'>
                <div className='text-name'>
                  <strong>{messageContent.name}</strong>
                </div>
                <div className='text-time'>{messageContent.time}</div>
              </div>
              <div className='text-message-component'>
                <div>{messageContent.message}</div>
              </div>
            </div>
          ))}
        </div>
        <div ref={ref} />
      </div>
      <div>
        <input 
          value={currMessage}
          onChange={(e) => setCurrMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
          }}}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default ChatBox;