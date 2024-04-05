import { addFriendToList } from './functions/addFriendToList';
import { randomID } from '../../../functions/randomID';
import { statusStore } from '../../../store/status/statusStore';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStore, userEmailStore } from '../../../store/user/userStore';
import './style.css';

function FriendSearchInput () {
  const [currSearch, setCurrSearch] = useState<string>("");
  const [waiting, setWaiting] = useState<any>([]);
  const [currUserName] = useRecoilState(userStore);
  const [currUserEmail] = useRecoilState(userEmailStore);
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
      if (response) setWaiting(response);
  };

  return (
    <>
      <form>
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
          {waiting.filter((o: any) => o.name !== currUserName)
          .map((options: any) => (
            <div 
              key={options._id}
              className='card'
            >
              {options.name}
              <br />
              {options.email}
              <button onClick={() => {
                addFriendToList(options.email, options.name, currUserEmail, roomid);
                addFriendToList(currUserEmail, currUserName, options.email, roomid);
                setUpdatedStatus(true);
              }}>
                Add
              </button>
            </div>
          ))}
        </div>
      )}
      {currSearch !== "" && waiting.length === 0 && (
        <div>None</div>
      )}
      {currSearch === "" && (
        <div>Waiting...</div>
      )}
    </>
  )
}

export default FriendSearchInput;