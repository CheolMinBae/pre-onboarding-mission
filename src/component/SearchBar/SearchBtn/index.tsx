import { FC } from "react";
import searchLogo from "../../../assets/search.svg";
import { ButtonStyle } from "./style";

interface Props {
  value: string;
}

const SearchBtn: FC<Props> = ({ value }) => {
  const ClickHandler = () => {
    alert(value);
  };

  return (
    <ButtonStyle onClick={ClickHandler}>
      <img
        src={searchLogo}
        className="logo"
        alt="Vite logo"
        width={30}
        draggable={false}
        color="white"
      />
    </ButtonStyle>
  );
};

export default SearchBtn;
