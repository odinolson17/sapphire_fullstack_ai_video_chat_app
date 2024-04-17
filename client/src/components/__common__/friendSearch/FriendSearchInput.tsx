import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { addFriendToList } from './functions/addFriendToList';
import mockphoto from '../../../assets/tyedye.jpg';
import { nameFormatting } from '../../../functions/nameFormatting';
import { randomID } from '../../../functions/randomID';
import { statusStore } from '../../../store/status/statusStore';
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
    console.log(response)
    if (response) setWaiting(response);
  };

  return (
    <>
      <form>
        <h3>Add Contacts</h3>
        <input 
          value={currSearch}
          onChange={(e) => {
            setCurrSearch(e.target.value);
            searchForFriends(e, e.target.value);
          }}
        />
      </form>
      {currSearch !== "" && waiting.length > 0 && (
        <div>
          {waiting
            .filter((o: any) => o.name !== currUserName.toLowerCase())
            .map((options: any) => (
            <div 
              key={options._id}
              className='card'
            >
              <img 
                src={
                  options.profilepic === 'NONE'
                    ? mockphoto
                    : options.profilepic
                }
                alt='profile'
                height={30}
                width={30}
              />
              {nameFormatting(options.name)}
              <br />
              {options.email}
              <button onClick={() => {
                addFriendToList(options.profilepic, options.email, options.name, currUserEmail, roomid);
                addFriendToList(currUserPicture, currUserEmail, currUserName, options.email, roomid);
                setUpdatedStatus(true);
              }}>
                {<AddCircleOutlineOutlinedIcon />}
              </button>
            </div>
          ))}
        </div>
      )}
      {currSearch !== "" && waiting.length === 0 && (
        <div>Not Found</div>
      )}
      {currSearch === "" && (
        <div>...</div>
      )}
    </>
  )
}

export default FriendSearchInput;