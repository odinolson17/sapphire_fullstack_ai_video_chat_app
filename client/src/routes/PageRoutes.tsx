import { Routes, Route } from 'react-router-dom';

import { userStore } from '../store/user/userStore';
import { useRecoilState } from 'recoil';

import Dashboard from '../components/Dashboard/Dashboard';
import FailedSignin from '../components/Auth/failedLogins/FailedSignin';
import FailedSignup from '../components/Auth/failedLogins/FailedSignup';
import Settings from '../components/__common__/profileOptions/components/Settings';
import Signin from '../components/Auth/Signin';
import Signup from '../components/Auth/Signup';

function PageRoutes () {

  const [protectedPathsValue] = useRecoilState(userStore);

   return (
    <>
      <Routes>
        {/** PUBLIC ROUTES */}
        <Route path="/" element={ <Signin /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/failedsignin" element={ <FailedSignin /> } />
        <Route path="failedsignup" element={ <FailedSignup /> } />
        {/** PRIVATE ROUTES */}
        {protectedPathsValue !== "mock-user" && (
          <>
            <Route path="/home" element={ <Dashboard /> } />
            <Route path="/settings" element={ <Settings /> } />
          </>
        )}
        {/** IF USER LOSES ACCESS TO PRIV ROUTES */}
        <Route path="*" element={ <Signin /> } />
      </Routes>
    </>
   )
}

export default PageRoutes;