import DropDownOptions from './DropDownOptions';
import { useState } from 'react';

function DropDownSettings () {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
      >
        Settings
      </button>
      { isOpen && <DropDownOptions /> }
    </div>
  )
}

export default DropDownSettings;