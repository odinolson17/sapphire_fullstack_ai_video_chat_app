import DropDownSettings from './components/DropDownSettings';
import { useRecoilValue } from 'recoil';
import { userStore } from '../../../store/user/userStore';
import './style.css'

function TopBar () {

  const name = useRecoilValue(userStore);

  return (
    <>
      <div className='container'>
        <div>
          {name !== 'mock-user' ? `Welcome ${name}!` : "Welcome user!"}
        </div>
        <div>
          <DropDownSettings />
        </div>
      </div>
    </>
  )
}

export default TopBar;