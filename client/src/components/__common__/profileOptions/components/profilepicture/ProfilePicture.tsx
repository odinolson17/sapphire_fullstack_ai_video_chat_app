import { sendPicture } from "./functions/sendPicture";
import { settingsStore } from "../../../../../store/settings/settingsStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { userEmailStore, userProfilePicStore } from "../../../../../store/user/userStore";
import { useState } from "react";

function ProfilePicture () {
  const email = useRecoilValue(userEmailStore);
  const [state, setState] = useRecoilState(settingsStore);
  const [profilePic, setNewProfilePic] = useRecoilState(userProfilePicStore);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [imageValue, setImageValue] = useState<any>(undefined);
  const image: any = document.getElementById("image");
  
  // trigger the photo to be saved
  if (trigger) {
    setImageValue(image.files[0]);
    setTrigger(false);
  }

  // change the state of the settings
  const changeState = () => {
    setState("PROFILE_PICTURE");
  };
  const backToSettings = () => {
    setState("ALL");
  };

  return (
    <>
      {state === "ALL" && (
        <button onClick={changeState}>
          Add Profile Picture (In Works)
        </button>
      )}
      
      {state === "PROFILE_PICTURE" && (
        <>
          <button onClick={backToSettings}>
            Settings
          </button>
          <br /><br />
          <input 
            type="file"
            accept="image/*"
            id="image"
            required
          />
          <button onClick={() => setTrigger(true)}>
            See Photo
          </button>
          <button onClick={async () => {
            if (imageValue) {
              const request = await sendPicture(imageValue, email);
              setNewProfilePic(request);
            }
          }}>
            Add Picture
          </button>
          {profilePic !== "NONE" && (
            <>
              <br /><br />
              <img src={profilePic} alt="profile" width={100} height={100} />
            </>
          )}
        </>
      )}
    </>
  )
}

export default ProfilePicture;