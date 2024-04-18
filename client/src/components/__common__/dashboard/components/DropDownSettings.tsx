import colors from '../../../../functions/colors';
import DropDownOptions from './DropDownOptions';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';

function DropDownSettings () {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [theme] = useLocalStorage('theme', 'electric-pink');

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='settings-button-component'
      >
        {<SettingsSuggestOutlinedIcon 
          style={{fill: colors(theme)}}
          fontSize='large'
        />}
      </button>
      { isOpen && <DropDownOptions /> }
    </div>
  )
}

export default DropDownSettings;