import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { addFriendToList } from './functions/addFriendToList';
import colors from '../../../functions/colors';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import mockphoto from '../../../assets/tyedye.jpg';
import { nameFormatting } from '../../../functions/nameFormatting';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import { randomID } from '../../../functions/randomID';
import { statusStore } from '../../../store/status/statusStore';
import useLocalStorage from 'use-local-storage';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userStore, userEmailStore, userProfilePicStore } from '../../../store/user/userStore';
import './style.css';

function FriendSearchInput () {
  const [currSearch, setCurrSearch] = useState<string>("");
  const [waiting, setWaiting] = useState<any>([]);
  const currUserName = useRecoilValue(userStore);
  const currUserEmail = useRecoilValue(userEmailStore);
  const currUserPicture = useRecoilValue(userProfilePicStore);
  const [, setUpdatedStatus] = useRecoilState(statusStore);
  const [theme] = useLocalStorage('theme', 'electric-pink');
  const roomid: string = randomID();

  const searchForFriends = async (e: React.FormEvent, currValue: string) => {
    e.preventDefault();
    const request = await fetch("api/userRouter/searchForFriends", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentSearch: currValue
        })
    });
    const response = await request.json();
    if (response) {
      if (response.length === 1) {
        if (response[0].name === currUserName.toLowerCase()) {
          setWaiting([]);
        } else {
          setWaiting(response);
        }
      } else {
        setWaiting(response);
      }
    }
  };

  return (
    <div className='contact-component'>
      <div className='friend-container' data-theme={theme}>
        <form className='center-content'>
          <h3 style={{ color: colors(theme) }}>Add Contacts</h3>
          <input 
            value={currSearch}
            onChange={(e) => {
              setCurrSearch(e.target.value);
              searchForFriends(e, e.target.value);
            }}
            className='search-input-text'
            style={{ background: colors(theme) }}
          />
        </form>
        {currSearch !== "" && waiting.length > 0 && (
          <div className='inside-scroll'>
            {waiting
              .filter((o: any) => o.name !== currUserName.toLowerCase())
              .map((options: any) => (
              <div 
                key={options._id}
                className='card'
                style={{ color: colors(theme)}}
              >
                <div className='sidebyside'>
                  <img 
                    src={
                      options.profilepic === 'NONE'
                        ? mockphoto
                        : options.profilepic
                    }
                    alt='profile'
                    height={30}
                    width={30}
                    className='images'
                  />
                  <div style={{color: colors(theme)}}>
                    {nameFormatting(options.name)}
                  </div>
                </div>
                <div className='sidebyside'>
                  <div style={{color: colors(theme)}}>
                    {options.email}
                  </div>
                  <button 
                    className='no-background'
                    onClick={() => {
                      addFriendToList(options.profilepic, options.email, options.name, currUserEmail, roomid);
                      addFriendToList(currUserPicture, currUserEmail, currUserName, options.email, roomid);
                      setUpdatedStatus(true);
                  }}>
                    {<AddCircleOutlineOutlinedIcon 
                      style={{fill: colors(theme)}}
                      className='icon-grows'
                    />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {currSearch !== "" && waiting.length === 0 && (
          <div
            className='center-content push-down-a-bit'
          >
            <NotInterestedOutlinedIcon 
              style={{fill: colors(theme)}}
              className='spinning-icon'
              fontSize='large'
            />
            <br />
            <div style={{color: colors(theme)}}>
              User Not Found
            </div>
          </div>
        )}
        {currSearch === "" && (
          <div 
            className='center-content push-down-a-bit'
          >
            <HourglassEmptyIcon 
              style={{fill: colors(theme)}}
              className='spinning-icon'
              fontSize='large'
            />
            <br />
            <div style={{color: colors(theme)}}>
              Search for friends...
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FriendSearchInput;