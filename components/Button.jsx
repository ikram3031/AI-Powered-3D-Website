// components/Button.js

import React from 'react';

const Button = ({ children, type, onClick , styles}) => {
  let buttonClass = 'text-white font-semibold cursor-pointer border-2 transition ease-in-out duration-500 flex gap-2 items-center rounded-md px-4 py-1';

  switch (type) {
    case 'primary':
      buttonClass += ' justify-center bg-textColor hover:bg-dark';
      break;
    case 'secondary':
      buttonClass += ' text-white bg-secondary border-secondary hover:bg-white hover:text-dark min-w-fit';
      break;
    case 'success':
      buttonClass += ' bg-success hover:bg-green-700';
      break;
    default:
      buttonClass += ' relative border-0 text-dark px-1';
  }

  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      style={styles}
    >
      {children}
    </button>
  );
};

export default Button;
