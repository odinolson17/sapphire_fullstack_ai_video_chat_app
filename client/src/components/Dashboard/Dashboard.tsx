import Contacts from '../__common__/contacts/Contacts';
import FriendSearchInput from '../__common__/friendSearch/FriendSearchInput';
import Text from '../Text/Text';
import TopBar from '../__common__/dashboard/TopBar';

function Dashboard () {

  return (
    <>
      <TopBar />
      <FriendSearchInput />
      <br /><br /><br />
      <Contacts />
      <br /><br />
      <Text />
    </>
  )
}

export default Dashboard;