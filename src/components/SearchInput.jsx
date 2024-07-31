import { styled } from "styled-components";
import { AutoCompleteBox, GroupedAutoComplete } from "./";

export default function SearchInput({ autoCompleteData, ...props }) {
    return (
        <Container>
            <Input {...props} />
            <AutoCompleteBox>
                <GroupedAutoComplete data={autoCompleteData} />
            </AutoCompleteBox>
        </Container>
    );
}

const Container = styled.label`
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    z-index: 2;
    width: 16.5rem;
    height: 2.125rem;
    border: none;
    border: 1px solid #cdcdcd;
    border-radius: 0.25rem;
    outline: none;
`;
