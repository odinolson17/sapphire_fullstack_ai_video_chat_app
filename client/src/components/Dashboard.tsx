import Text from './Text/Text';
import InputAI from './AI/InputAI';

import { useLocation } from 'react-router-dom';

function Dashboard () {
  const location = useLocation();
  const usersname: string = location.state;

  return (
    <>
      {usersname ? "Hello, " + usersname : "Hello, user!"}
      <br /><br />
      <InputAI />
      <br /><br />
      <Text usersname={usersname} />
    </>
  )
}

export default Dashboard;