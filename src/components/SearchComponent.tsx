import React, { useState } from 'react';
import { dummy } from '../services/data';
import styled from 'styled-components';


export default function SearchComponent() {
    const [keyWord, setKeyWord] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.target.value);
    };

    const highlightText = (text: string, highlight: string) => {
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <Text>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase()
                        ? <HighlightText key={index}>{part}</HighlightText>
                        : part
                )}
            </Text>
        );
    };

    return (
        <Wrapper>
            <InputWrapper>
                <Input
                    type="text"
                    value={keyWord}
                    onChange={handleSearch}
                />
                <Button>
                    <ButtonImage src="/assets/search-icon.png" alt="search icon" />
                </Button>
            </InputWrapper>
            {keyWord && (
                <Recommend>
                    <Title>COMPANY</Title>
                    {dummy.map(result => (
                        <Item key={result.key}>
                            {highlightText(result.description, keyWord)}
                        </Item>
                    ))}
                </Recommend>
            )}
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: calc(5vh - 20px);
    width: calc(100vw - 20px);
    margin: 10px;
    position: relative;
`;


const InputWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;


const Input = styled.input`
    height: calc(100% - 14px);
    width: calc(40% - 14px);
    padding: 5px;
    border: 2px solid rgb(194, 215, 255);
    border-radius: 15px;
    font-size: 1.3vh;
    outline-color: rgb(25, 105, 254);
`;


const Button = styled.button`
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
    user-select: none;
`;


const ButtonImage = styled.img`
    height: 100%;
`;


const Recommend = styled.div`
    max-height: 400%;
    width: calc(40% - 4px);
    border: 2px solid rgb(25, 105, 254);
    font-size: 1.3vh;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow-y: auto;
    z-index: 1;
`;


const Title = styled.div`
    padding: 5px;
    font-weight: bold;
    background-color:rgb(25, 105, 254);
    color: white;
`;


const Item = styled.div`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: rgb(194, 215, 255);
    }
`;


const Text = styled.span`
    display: inline;
`;


const HighlightText = styled.span`
    font-weight: bold;
`;