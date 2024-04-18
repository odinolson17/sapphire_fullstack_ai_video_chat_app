import ColorTheme from "../../theme/ColorTheme";
import ProfileOptions from "../../profileOptions/ProfileOptions";
import SignOut from "../../../Auth/SignOut";

function DropDownOptions () {
  
  return (
    <div className="drop-down-content">
      <ColorTheme />
      <ProfileOptions />
      <SignOut />
    </div>
  )
}

export default DropDownOptions;