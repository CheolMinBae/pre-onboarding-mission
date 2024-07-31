import { styled } from "styled-components";
import { useState, useRef } from "react";
import { useClickedMe } from "@hooks";
import { AutoCompleteBox, GroupedAutoComplete } from "@components";

export default function SearchInput({ autoCompleteData, ...props }) {
    const [keyword, setKeyword] = useState("");

    function handleInput(e) {
        const newInput = e.target.value;
        setKeyword(newInput);
    }

    const containerRef = useRef();
    const clickedInput = useClickedMe(containerRef);
    const showAutoComplete = keyword.length > 0 && clickedInput;

    return (
        <Container ref={containerRef}>
            <Input type="text" onInput={handleInput} spellCheck="false" {...props} />
            <AutoCompleteBox show={showAutoComplete}>
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
