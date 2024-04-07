import ProfileOptions from "../../profileOptions/ProfileOptions";
import SignOut from "../../../Auth/SignOut";

function DropDownOptions () {
  
  return (
    <div className="drop-down-content">
      <button>Light/Dark Mode</button>
      <ProfileOptions />
      <SignOut />
    </div>
  )
}

export default DropDownOptions;