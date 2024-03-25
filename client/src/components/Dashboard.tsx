import Text from './Text/Text';

import { useLocation } from 'react-router-dom';

function Dashboard () {
  const location = useLocation();
  const usersname: string = location.state;

  return (
    <>
      {usersname ? `Welcome ${usersname}!` : "Welcome user!"}
      <br />
      <Text usersname={usersname} />
    </>
  )
}

export default Dashboard;