import { useNavigate } from "react-router-dom";

function ProfileOptions () {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/settings');
  }

  return (
    <>
      <button onClick={handleClick}>
        Profile Options
      </button>
    </>
  )
}

export default ProfileOptions;