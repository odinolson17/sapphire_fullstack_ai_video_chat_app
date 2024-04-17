import Contacts from '../__common__/contacts/Contacts';
import FriendSearchInput from '../__common__/friendSearch/FriendSearchInput';
import Text from '../Text/Text';
import TopBar from '../__common__/dashboard/TopBar';
import VideoHome from '../Video/VideoHome';

import { callStore } from '../../store/call/callStore';
import { useRecoilValue } from 'recoil';
import { videoStore } from '../../store/video/videoStore';
import './style.css';

function Dashboard () {
  const activeCall = useRecoilValue(callStore);
  const videoCall = useRecoilValue(videoStore);

  return (
    <>
      <TopBar />
      {!activeCall.name && !activeCall.roomid && (
        <div className='spreading-the-content'>
          <Contacts />
          <FriendSearchInput />
        </div>
      )}
      {activeCall.name && activeCall.roomid && !videoCall && (
        <div className='centering-the-content'>
          <Text />
        </div>
      )}
      {activeCall.name && activeCall.roomid && videoCall && (
        <div className='centering-the-content'>
          <VideoHome />
          <Text />
        </div>
      )}
    </>
  )
}

export default Dashboard;