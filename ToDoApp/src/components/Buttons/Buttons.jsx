import React from 'react';

const Button = ({ variant, children, onClick , className}) => {
  const variantStyles = {
    primary: 'md:p-6 md:text-xl transform -translate-y-1/2 pl-6 pr-6 font-bold text-yellow-800 left-8 bg-white p-2 rounded-xl shadow-xl',
    secondary: 'text-yellow-400 underline decoration-yellow-400 underline-offset-4 cursor-pointer',
  };

  const combineStyles = `${variantStyles[variant]} ${className}`;
  return (
    <button className={combineStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
