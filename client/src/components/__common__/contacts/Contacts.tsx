import { statusStore } from '../../../store/status/statusStore';
import { handleClick } from './functions/handleClick';
import { useRecoilState } from 'recoil';
import { userEmailStore } from '../../../store/user/userStore';
import { useState } from 'react';

function Contacts () {
  const [contacts, setContacts] = useState<any>([]);
  const [currStatus, setCurrStatus] = useRecoilState(statusStore);
  const [currUserEmail] = useRecoilState(userEmailStore);

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
              <button>Call</button>
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