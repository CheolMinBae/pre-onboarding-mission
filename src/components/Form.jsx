import { styled } from "styled-components";
import { SearchIcon } from "../assets";
import { dummy } from "../assets/data";

export default function Form(params) {
    return (
        <Container>
            <SearchBox>
                <Input placeholder="검색어를 입력해주세요" required minLength={1} />
                <AutoCompleteContainer>
                    <AutoComplete>
                        {dummy.map(({ description, key, type }) => (
                            <AutoCompleteOption key={key}>{description}</AutoCompleteOption>
                        ))}
                    </AutoComplete>
                </AutoCompleteContainer>
            </SearchBox>
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

const SearchBox = styled.label`
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

const AutoCompleteContainer = styled.div`
    position: absolute;
    z-index: 1;
    top: 1.7rem;
    width: 16.5rem;
    margin: 0px;
    padding: 0px;
    padding-top: 0.375rem;
    padding-bottom: 1px;
    border: 1px solid #cdcdcd;
    border-radius: 0.2rem;
`;

const AutoComplete = styled.ul`
    max-height: 8rem;
    margin: 0px;
    padding: 0px;

    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    list-style: none;
    overflow-y: scroll;
`;

const AutoCompleteOption = styled.li`
    min-height: 1.5rem;
    padding-left: 0.125rem;
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
