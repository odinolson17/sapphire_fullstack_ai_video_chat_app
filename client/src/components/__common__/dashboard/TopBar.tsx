import { useRecoilState } from 'recoil';
import { userStore } from '../../../store/user/userStore';
import './style.css'

function TopBar () {

  const [name] = useRecoilState(userStore);

  return (
    <>
      <div className='container'>
        <div>
          {name !== 'mock-user' ? `Welcome ${name}!` : "Welcome user!"}
        </div>
        <div>
          <button>Settings</button>
        </div>
      </div>
    </>
  )
}

export default TopBar;