import DropDownOptions from './DropDownOptions';
import { pink } from '@mui/material/colors';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';import { useState } from 'react';

function DropDownSettings () {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='settings-button-component'
      >
        {<SettingsSuggestOutlinedIcon 
          style={{fill: pink[50]}}
          fontSize='large'
        />}
      </button>
      { isOpen && <DropDownOptions /> }
    </div>
  )
}

export default DropDownSettings;