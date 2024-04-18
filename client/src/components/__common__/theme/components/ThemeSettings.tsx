import { ColorArrayType, colorOptions } from "../colorOptions/colorOptions";
import { pickBoxColor } from "./functions/pickBoxColor";
import { statusStore } from "../../../../store/status/statusStore";
import useLocalStorage from 'use-local-storage'
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import './style.css';

function ThemeSettings () {
  const navigate = useNavigate();
  const [theme, setTheme] = useLocalStorage('theme', 'electric-pink');
  // refreshes the contacts on homepage
  const [, setStatus] = useRecoilState(statusStore);

  return (
    <>
      <h1>Themes</h1>
      <button onClick={() => {
        navigate('/home');
        setStatus(true);
      }}>
        Home
      </button>
      <br /> <br /> <br />
      <div className='grid'>
        {colorOptions.map((option: ColorArrayType) => (
          <div 
            key={option.name}
            onClick={() => setTheme(option.cssname)}
            className='color-theme-boxes'
            id={theme === option.cssname ? 'active' : 'inactive'}
          >
            <div className={pickBoxColor(option.cssname)} />
            <div className='color-names'>
              {option.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThemeSettings;