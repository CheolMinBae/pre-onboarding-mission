import React from 'react';

type TInputProps = React.ComponentProps<'input'>;
const Input = (props: TInputProps) => {
  const { ...restProps } = props;
  return <input {...restProps} className="border border-gray-950 p-1" />;
};

export default Input;
