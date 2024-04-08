import DropDownSettings from './components/DropDownSettings';
import mockPhoto from './components/assets/tyedye.jpg';
import { useRecoilValue } from 'recoil';
import { userProfilePicStore, userStore } from '../../../store/user/userStore';
import './style.css'

function TopBar () {

  const name = useRecoilValue(userStore);
  const storedPicture = useRecoilValue(userProfilePicStore);
  const profilePicture = storedPicture === 'NONE' ? mockPhoto : storedPicture;

  return (
    <>
      <div className='container'>
        <div>
          {name !== 'mock-user' 
          ?
          <div className='left-side-top-bar'>
            <div 
              className='welcome-text'
            >
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