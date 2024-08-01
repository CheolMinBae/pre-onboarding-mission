import { styled } from "styled-components";

function sortByType(data) {
    const result = {};

    for (let item of data) {
        if (result[item.type]) result[item.type].push(item);
        else result[item.type] = [item];
    }

    return result;
}

function highlightKeyword(description, keyword) {
    const regex = new RegExp(keyword, "gi");
    const splittedDesc = description.split(regex);
    const matchedWords = [...description.matchAll(regex)];
    return splittedDesc.map((wordFragment, index) => (
        <>
            {index !== 0 && <strong>{matchedWords[index - 1]}</strong>}
            {wordFragment}
        </>
    ));
}

function DisplayByType(data, keyword) {
    const result = [];

    for (let type in data) {
        const TypeItems = data[type].map(({ key, description }) => (
            <Option key={key}>{highlightKeyword(description, keyword)}</Option>
        ));

        result.push(
            <li key={type}>
                <TypeList>
                    <Tag>{type}</Tag>
                    {TypeItems}
                </TypeList>
            </li>
        );
    }

    return result;
}

export default function GroupedAutoComplete({ data: autoCompleteData, keyword }) {
    const sortedAutoComplete = sortByType(autoCompleteData);

    return <Container>{DisplayByType(sortedAutoComplete, keyword)}</Container>;
}

const Container = styled.ul`
    max-height: 8rem;
    margin: 0px;
    padding: 0px;

    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    list-style: none;
    overflow-y: scroll;
`;

const TypeList = styled.ul`
    margin: 0px;
    padding: 0px;

    list-style: none;
    display: flex;
    flex-direction: column;
`;

const Tag = styled.ul`
    padding-left: 0.125rem;

    color: #0627f2;
    background-color: #ebf1ff;
`;

const Option = styled.li`
    min-height: 1.5rem;
    padding-left: 0.375rem;
`;
