import { styled } from "styled-components";
import { SearchInput } from "@components";

import { SearchIcon } from "@assets";
import { dummy } from "@/data";

export default function Form() {
    return (
        <Container>
            <SearchInput autoCompleteData={dummy} />
            <SubmitButton type="submit">
                <SearchIcon fill="#ffffff" />
            </SubmitButton>
        </Container>
    );
}

const Container = styled.form`
    width: stretch;
    height: 3.5rem;
    padding: 0.25rem;

    display: flex;
    align-items: center;
`;

const SubmitButton = styled.button`
    width: 2rem;
    height: 2rem;
    margin-left: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 1rem;
    background-color: #3fa2f6;
`;
