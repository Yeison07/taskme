'use client';
import * as React from 'react';

interface IInputProps {
  type: string;
  placeholder: string;
}

const Input: React.FunctionComponent<IInputProps> = ({ type, placeholder }) => {
  const handleClick = () => {
    return (event: React.MouseEvent) => {
      console.log(event.target);

      event?.preventDefault;
    };
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      onClick={handleClick()}
    ></input>
  );
};

export default Input;
