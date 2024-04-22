import { 
  callStore,
  callSingularContactProfilePic
} from '../../../store/call/callStore';
import { getTime } from '../../../functions/getTime';
import mockphoto from '../../../assets/tyedye.jpg';
import { randomIDwithLetters } from '../../../functions/randomID';
import { saveMessageHandleClick } from './functions/saveMessageHandleClick';
import { Socket } from 'socket.io-client'
import { statusStore, triggerTextStore } from '../../../store/status/statusStore';
import { useEffect, useState, useRef } from 'react';
import { userEmailStore, userProfilePicStore } from '../../../store/user/userStore';
import { useRecoilState, useRecoilValue } from 'recoil';
import { videoStore } from '../../../store/video/videoStore';
import './style.css';

interface Props {
  socket: Socket;
  name: string;
  room: string;
}

export interface MessageDataObj {
  room: string;
  name: string;
  message: string;
  time: string;
  chatid: string;
}

function ChatBox ({ socket, name, room }: Props) {

  const [callInfo, setEndCall] = useRecoilState(callStore);
  const [, setNotActiveCall] = useRecoilState(triggerTextStore);
  const [, setCurrContactsStatus] = useRecoilState(statusStore);
  const [videoStatus, setVideoStatus] = useRecoilState(videoStore);
  const [friendsPhoto, setFriendPhoto] = useRecoilState(callSingularContactProfilePic);
  const currUserPhoto = useRecoilValue(userProfilePicStore);
  const currUserEmail = useRecoilValue(userEmailStore);

  const [currMessage, setCurrMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<MessageDataObj[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (currMessage !== "") {
      const messageData: MessageDataObj = {
        room: room,
        name: name,
        message: currMessage,
        time: getTime(),
        chatid: randomIDwithLetters()
      }

      await socket.emit("send_message", messageData);
      // adds to current user
      const recentTexts = await saveMessageHandleClick(messageData, currUserEmail);
      // adds to the other user!
      await saveMessageHandleClick(messageData, callInfo.email!);
      setMessageList(recentTexts);
      //setMessageList((list) => [...list, messageData])

      setCurrMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // do fetch request here!

      //setMessageList((list) => [...list, data]);
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
          email: undefined,
          roomid: undefined
        });
        setCurrContactsStatus(true);
        setFriendPhoto('NONE');
        if (videoStatus) {
          setVideoStatus(false);
        };
      }}>
        Leave Chat
      </button>
      <div className='messagecontainer'>
        {messageList.map((messageContent) => (
          <div
            className='messagecomponent'
            id={name === messageContent.name ? 'self' : 'other'}
            key={messageContent.chatid}
          >
            <div className='split-content'>
              <div className='text-name'>
                <img 
                  src={
                    name === messageContent.name
                      ? currUserPhoto === 'NONE'
                        ? mockphoto
                        : currUserPhoto
                      : friendsPhoto === 'NONE'
                        ? mockphoto
                        : friendsPhoto
                  }
                  alt='profile'
                  height={30}
                  width={30}
                />
                <strong>{messageContent.name}</strong>
              </div>
              <div className='text-time'>{messageContent.time}</div>
            </div>
            <div className='textmessagecomponent'>
              <div>{messageContent.message}</div>
            </div>
          </div>
        ))}
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