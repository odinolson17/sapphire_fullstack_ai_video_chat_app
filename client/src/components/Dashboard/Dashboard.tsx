import Contacts from '../__common__/contacts/Contacts';
import FriendSearchInput from '../__common__/friendSearch/FriendSearchInput';
import Text from '../Text/Text';
import TopBar from '../__common__/dashboard/TopBar';
import VideoHome from '../Video/VideoHome';

import { callStore } from '../../store/call/callStore';
import { useRecoilValue } from 'recoil';
import './style.css';

function Dashboard () {
  const activeCall = useRecoilValue(callStore);

  return (
    <>
      <TopBar />
      {!activeCall.name && !activeCall.roomid && (
        <>
          <FriendSearchInput />
          <br /><br /><br />
          <Contacts />
        </>
      )}
      {activeCall.name && activeCall.roomid && (
        <>
          <Text />
          <VideoHome />
        </>
      )}
    </>
  )
}

export default Dashboard;