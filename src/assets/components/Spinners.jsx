// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Spinners.css';

const Spinner = () => {
  return (
    <div className="center-spinner">
      <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Spinner;
