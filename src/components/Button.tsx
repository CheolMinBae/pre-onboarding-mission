import React from 'react';

type TButtonProps = React.ComponentProps<'button'> & {
  children: React.ReactNode;
};

const Button = (props: TButtonProps) => {
  const { children, ...restProps } = props;
  return (
    <button {...restProps} className="p-2 ml-2 bg-blue-500 text-white">
      {children}
    </button>
  );
};

export default Button;
