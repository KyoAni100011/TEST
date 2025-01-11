import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const baseStyle = `px-5 py-1 border-2 border-gray-900 rounded-sm`;

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  ...rest
}) => (
  <button className={`${baseStyle} ${className}`} onClick={onClick} {...rest}>
    {children}
  </button>
);

export default Button;
