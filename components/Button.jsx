// components/Button.js

import React from 'react';

const Button = ({ children, type, onClick }) => {
  let buttonClass = 'text-white font-bold cursor-pointer px-6 py-2 transition ease-in-out delay-50';

  switch (type) {
    case 'primary':
      buttonClass += ' bg-green-600 hover:bg-green-500 ';
      break;
    case 'secondary':
      buttonClass += ' bg-secondary hover:bg-secondary-hover ';
      break;
    case 'success':
      buttonClass += ' bg-success hover:bg-green-700';
      break;
    default:
      buttonClass += ' bg-gray-600 hover:bg-gray-800';
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
