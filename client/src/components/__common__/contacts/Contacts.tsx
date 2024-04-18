import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { 
  callStore, 
  callSingularContactProfilePic 
} from '../../../store/call/callStore';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import colors from '../../../functions/colors';
import { handleClick } from './functions/handleClick';
import mockphoto from '../../../assets/tyedye.jpg';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { nameFormatting } from '../../../functions/nameFormatting';
import { statusStore, triggerTextStore } from '../../../store/status/statusStore';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import useLocalStorage from 'use-local-storage';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userStore, userEmailStore } from '../../../store/user/userStore';
import { useState } from 'react';
import { videoStore } from '../../../store/video/videoStore';
import { whoToCall } from './functions/whoToCall';
import './style.css';

function Contacts () {
  const [contacts, setContacts] = useState<any>([]);
  const [currStatus, setCurrStatus] = useRecoilState(statusStore);
  const currUserEmail = useRecoilValue(userEmailStore);
  const [, setWhoToCall] = useRecoilState(callStore);
  const [, setTriggerText] = useRecoilState(triggerTextStore);
  const [, setFriendPhoto] = useRecoilState(callSingularContactProfilePic)
  const [, setVideoCall] = useRecoilState(videoStore);
  const currUser = useRecoilValue(userStore);
  const [theme] = useLocalStorage('theme', 'electric-pink');

  if (currStatus) {
    const runHandleClick = async () => {
      const request = await handleClick(currUserEmail);
      setContacts(request);
      setCurrStatus(false);
    };
    runHandleClick();
  }

  return (
    <div className='contact-component' data-theme={theme}>
      <div className='contact-box'>
        <div className='setting-up-content'>
          <h2 className='contact-name'>Contacts</h2>
          <button 
            onClick={async () => {
              const request = await handleClick(currUserEmail);
              setContacts(request);
            }}
            className='contact-buttons'
          >
            {<CachedOutlinedIcon 
              style={{fill: colors(theme)}}
              className='refresh-button'
            />}
          </button>
        </div>
        <div className='scroll-contacts'>
        {contacts.length > 0 && (
          <div>
            {contacts.map((person: any) => (
              <div 
                key={person._id}
                className='setting-up-content'
              >
                <div className='setting-up-content'>
                  <img 
                    src={
                      person.friendspicture === 'NONE'
                        ? mockphoto
                        : person.friendspicture
                    }
                    alt='profile'
                    height={30}
                    width={30}
                    className='contact-photo'
                  />
                  <div className='contact-name'>
                    {nameFormatting(person.friendsname)}
                  </div>
                </div>
                <div className='contact-buttons'>
                  <button
                    onClick={() => {
                      const request = whoToCall(currUser, person.roomid);
                      setWhoToCall(request);
                      setTriggerText(true);
                      setFriendPhoto(person.friendspicture);
                      setVideoCall(true);
                    }}
                    className='contact-buttons'
                  >
                    {<CameraAltOutlinedIcon 
                      style={{fill: colors(theme)}}
                      className='icon-grows'
                    />}
                  </button>
                  <button
                    onClick={() => {
                      const request = whoToCall(currUser, person.roomid);
                      setWhoToCall(request);
                      setTriggerText(true);
                      setFriendPhoto(person.friendspicture);
                    }}
                    className='right-contacts-buttons'
                  >
                    {<TextsmsOutlinedIcon 
                      style={{fill: colors(theme)}}
                      className='icon-grows'
                    />}
                  </button>
                  <button
                    className='three-dots-button'
                  >
                    {<MoreVertOutlinedIcon
                      style={{fill: colors(theme)}}
                      className='icon-grows'
                    />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {contacts.length === 0 && (
          <div>waiting for contacts</div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Contacts;