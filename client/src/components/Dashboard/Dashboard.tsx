import Text from '../Text/Text';
import { useRecoilState } from 'recoil';
import { userStore } from '../../store/user/userStore';

function Dashboard () {
  const [usersname] = useRecoilState(userStore);

  return (
    <>
      {usersname ? `Welcome ${usersname}!` : "Welcome user!"}
      <br />
      <Text usersname={usersname} />
    </>
  )
}

export default Dashboard;