import { callStore } from '../../store/call/callStore';
import ChatBox from './components/ChatBox';
import io from 'socket.io-client';
import { triggerTextStore } from '../../store/status/statusStore';
import { useRecoilValue } from 'recoil';

const socket = io('http://localhost:4000');

function Text () {
  const activeCall = useRecoilValue(callStore);
  const triggerChat = useRecoilValue(triggerTextStore);

  if (triggerChat) {
    socket.emit("join_room", activeCall.roomid)
  };

  return (
    <ChatBox 
      socket={socket} 
      name={activeCall.name!} 
      room={activeCall.roomid!} 
    />
  )
}

export default Text;