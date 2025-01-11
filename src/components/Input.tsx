import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: () => void;
}

const baseStyle = `w-full px-2 py-1 block border-2 border-gray-900 rounded-sm focus:ring focus:ring-blue-300 transition duration-300`;

const Input: React.FC<InputProps> = ({ className = "", onChange, ...rest }) => (
  <input
    className={`${baseStyle} ${className}`}
    onChange={onChange}
    {...rest}
  />
);

export default Input;
