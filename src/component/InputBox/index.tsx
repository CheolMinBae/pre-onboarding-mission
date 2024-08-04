import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from './index.style';

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(({ ...props }, ref) => {
  return (
    <S.InputBoxContainer>
      <S.Input ref={ref} {...props} />
    </S.InputBoxContainer>
  );
});

export default InputBox;
