import {IoMdSearch} from "react-icons/io";
import {Dispatch, SetStateAction} from "react";
import styled from "styled-components";

interface ISearchBar {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const SearchBar = ({value, setValue}:ISearchBar) => {

    return (
        <Container>
            <Input value={value} onChange={e => setValue(e.target.value)}/>
            <Button><IoMdSearch/></Button>
        </Container>
    );
};

export default SearchBar;

const Container = styled.div`
    height: 36px
`


const Input = styled.input`
    width: 180px;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
`

const Button = styled.button`
    width: 36px;
    height: 100%;
    margin-left: 10px;
`