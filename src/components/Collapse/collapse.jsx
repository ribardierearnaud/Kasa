import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';

const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

const Collapse = ({ collapseTitle, collapseContent }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={handleToggle}>
        <span className='collapse-title'>{collapseTitle}</span>
        <span className='collapse-icon'>{open ? angleUp : angleDown}</span>
      </div>
      {open && <div className='collapse-content'>{collapseContent}</div>}
    </div>
  );
};

export default Collapse;