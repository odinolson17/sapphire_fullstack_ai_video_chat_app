import { callStore } from '../../../store/call/callStore';
import { handleClick } from './functions/handleClick';
import { 
  statusStore, 
  triggerTextStore 
} from '../../../store/status/statusStore';
import { useRecoilState } from 'recoil';
import { userStore, userEmailStore } from '../../../store/user/userStore';
import { useState } from 'react';
import { whoToCall } from './functions/whoToCall';

function Contacts () {
  const [contacts, setContacts] = useState<any>([]);
  const [currStatus, setCurrStatus] = useRecoilState(statusStore);
  const [currUserEmail] = useRecoilState(userEmailStore);
  const [, setWhoToCall] = useRecoilState(callStore);
  const [, setTriggerText] = useRecoilState(triggerTextStore);
  const [currUser] = useRecoilState(userStore);

  if (currStatus) {
    const runHandleClick = async () => {
      const request = await handleClick(currUserEmail);
      setContacts(request);
      setCurrStatus(false);
    };
    runHandleClick();
  }

  return (
    <>
      <button onClick={async () => {
        const request = await handleClick(currUserEmail);
        setContacts(request);
      }}>
        Refresh
      </button>
      <br /><br />
      {contacts.length > 0 && (
        <div>
          {contacts.map((person: any) => (
            <div
              key={person._id}
            >
              {person.friendsname}
              <button
                onClick={() => {
                  const request = whoToCall(currUser, person.roomid);
                  setWhoToCall(request);
                  setTriggerText(true);
                }}
              >
                Call
              </button>
            </div>
          ))}
        </div>
      )}
      {contacts.length === 0 && (
        <div>waiting for contacts</div>
      )}
    </>
  )
}

export default Contacts;