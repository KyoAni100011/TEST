import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

const baseStyle = `block mb-1`;

const Label: React.FC<LabelProps> = ({ children, className = "", ...rest }) => (
  <label className={`${baseStyle} ${className}`} {...rest}>
    {children}
  </label>
);

export default Label;
