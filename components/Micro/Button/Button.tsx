import React from "react";

type Btn = {
  className?: string;
  children: string | React.ReactNode
  disabled?: boolean;
};

const Button = ({ className, children, disabled }: Btn) => {
  return (
    <button className={`${className} p-3`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
