import { useNavigate } from "react-router-dom";

function ColorTheme () {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/themes');
  }

  return (
    <>
      <button onClick={handleClick}>
        Change Theme
      </button>
    </>
  );
};

export default ColorTheme;