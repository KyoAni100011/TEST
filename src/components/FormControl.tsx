import React from "react";

export interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

const baseStyle = `mb-2`;

const FormGroup: React.FC<FormGroupProps> = ({
  children,
  className = "",
  ...rest
}) => (
  <div className={`${baseStyle} ${className}`} {...rest}>
    {children}
  </div>
);

export default FormGroup;
