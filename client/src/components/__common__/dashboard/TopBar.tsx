import DropDownSettings from './components/DropDownSettings';
import mockPhoto from '../../../assets/tyedye.jpg';
import useLocalStorage from 'use-local-storage'
import { useRecoilValue } from 'recoil';
import { userProfilePicStore, userStore } from '../../../store/user/userStore';
import './style.css'

function TopBar () {
  const [theme] = useLocalStorage('theme', 'electric-pink');
  const name = useRecoilValue(userStore);
  const storedPicture = useRecoilValue(userProfilePicStore);
  const profilePicture = storedPicture === 'NONE' ? mockPhoto : storedPicture;

  return (
    <>
      <div className='container' data-theme={theme} >
        <div>
          {name !== 'mock-user' 
          ?
          <div className='left-side-top-bar'>
            <div className='welcome-text' >
              {`Welcome ${name} !`}
            </div>
            <img 
              src={profilePicture} 
              alt='profile' 
              height={60} 
              width={60} 
              className='profile-image'
            />
          </div>  
          : 
          "Welcome user!"}
        </div>
        <div>
          <DropDownSettings />
        </div>
      </div>
    </>
  )
}

export default TopBar;