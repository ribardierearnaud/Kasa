import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';

const angleUp = <FontAwesomeIcon icon={faAngleUp} />;

const Collapse = ({ collapseTitle, collapseContent }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  

  return (
    <div className={`collapse ${open ? 'open' : ''}`}>
      <div className='collapse-header' onClick={handleToggle}>
        <div className='collapse-title'>{collapseTitle}</div>
        <span className={`collapse-icon ${open ? 'rotate' : ''}`}>
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </div>
      {<div className='collapse-content'>{collapseContent}</div>}
    </div>
  );
};

export default Collapse;