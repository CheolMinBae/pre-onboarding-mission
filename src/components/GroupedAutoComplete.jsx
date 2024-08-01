import { styled } from "styled-components";

function sortByType(data) {
    const result = {};

    for (let item of data) {
        if (result[item.type]) result[item.type].push(item);
        else result[item.type] = [item];
    }

    return result;
}

function DisplayByType(data) {
    const result = [];

    for (let type in data) {
        result.push(
            <li key={type}>
                <TypeList>
                    <TypeTag>{type}</TypeTag>
                    {data[type].map(({ key, description }) => (
                        <Option key={key}>{description}</Option>
                    ))}
                </TypeList>
            </li>
        );
    }

    return result;
}

export default function GroupedAutoComplete({ data: autoCompleteData }) {
    const sortedAutoComplete = sortByType(autoCompleteData);

    return <Container>{DisplayByType(sortedAutoComplete)}</Container>;
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

const TypeTag = styled.ul`
    padding-left: 0.125rem;

    color: #0627f2;
    background-color: #ebf1ff;
`;

const Option = styled.li`
    min-height: 1.5rem;
    padding-left: 0.375rem;
`;
