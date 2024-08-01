import { styled } from "styled-components";
import { SearchInput } from "@components";

import { SearchIcon } from "@assets";
import { dummy } from "@/data";

export default function Form() {
    return (
        <Container>
            <SearchInput autoCompleteData={dummy} />
            <SubmitButton type="submit">
                <SearchIcon width={36} height={36} fill="#ffffff" />
            </SubmitButton>
        </Container>
    );
}

const Container = styled.form`
    height: 8rem;

    display: flex;
    align-items: center;
`;

const SubmitButton = styled.button`
    width: 3rem;
    height: 3rem;
    margin-left: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 1.5rem;
    background-color: #3fa2f6;
`;
