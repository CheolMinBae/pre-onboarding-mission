import "./Button.css";
import React, { forwardRef } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, className, ...props },
  ref,
) {
  return (
    <button className={`button ${className ?? ""}`} {...props} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
