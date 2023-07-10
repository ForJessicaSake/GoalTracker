import React from "react";

type Btn = {
  className?: string;
  children: string | React.ReactNode
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ className, children, disabled, onClick }: Btn) => {
  return (
    <button className={`${className} p-3`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
