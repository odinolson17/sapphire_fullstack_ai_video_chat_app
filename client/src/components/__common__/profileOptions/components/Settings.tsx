import ProfilePicture from "./profilepicture/ProfilePicture";

import { settingsStore } from "../../../../store/settings/settingsStore";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

function Settings () {
  const navigate = useNavigate();
  const state = useRecoilValue(settingsStore);

  return (
    <>
      <h1>settings</h1>
      <button onClick={() => navigate('/home')}>
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