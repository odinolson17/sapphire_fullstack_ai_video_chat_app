import ProfilePicture from "./profilepicture/ProfilePicture";

import { settingsStore } from "../../../../store/settings/settingsStore";
import { statusStore } from "../../../../store/status/statusStore";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

function Settings () {
  const navigate = useNavigate();
  const state = useRecoilValue(settingsStore);
  // refreshes the contacts on homepage
  const [, setStatus] = useRecoilState(statusStore);

  return (
    <>
      <h1>settings</h1>
      <button onClick={() => {
        navigate('/home');
        setStatus(true);
      }}>
        Home
      </button>
      <br /><br />

      {state === "ALL" && (
        <>
          <button>
            Change Name (In Works)
          </button>
          <br /><br />
          <ProfilePicture />
          <br /><br />
          <button>
            Delete Account (In Works)
          </button>
        </>
      )}

      {state === "PROFILE_PICTURE" && (
        <ProfilePicture />
      )}
    </>
  )
}

export default Settings;