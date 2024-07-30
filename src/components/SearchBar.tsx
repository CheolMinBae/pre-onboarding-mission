import React from 'react';
import Input from './Input';
import Button from './Button';
import { FaSearch } from 'react-icons/fa';

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const { ...restProps } = props;

  return (
    <form
      action=""
      className="w-[100%] h-auto flex items-center justify-center">
      <Input {...restProps} />
      <Button>
        <FaSearch />
      </Button>
    </form>
  );
};

export default SearchBar;
