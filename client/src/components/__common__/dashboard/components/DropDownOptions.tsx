import SignOut from "../../../Auth/SignOut";

function DropDownOptions () {
  
  return (
    <div className="drop-down-content">
      <button>Light/Dark Mode</button>
      <button>Profile Options</button>
      <SignOut />
    </div>
  )
}

export default DropDownOptions;