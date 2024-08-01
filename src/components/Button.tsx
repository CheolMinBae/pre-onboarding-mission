import React, { forwardRef } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, ...props },
  ref,
) {
  return (
    <button {...props} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
