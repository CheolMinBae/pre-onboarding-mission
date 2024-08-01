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
                <GroupedAutoComplete data={autoCompleteData} keyword={keyword} />
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
    width: 24rem;
    height: 3rem;
    border: none;
    border: 1px solid #cdcdcd;
    border-radius: 0.5rem;
    outline: none;
    font-size: 1.5rem;
`;
