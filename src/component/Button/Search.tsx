import { ButtonHTMLAttributes, forwardRef } from 'react';
import { SearchButtonContainer } from './index.style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SearchButton = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return (
    <SearchButtonContainer ref={ref} {...props}>
      검색
    </SearchButtonContainer>
  );
});

export default SearchButton;
