import { styled } from "styled-components";

export default function GroupedAutoComplete({ data }) {
    return (
        <Container>
            {data.map(({ description, key, type }) => (
                <Option key={key}>{description}</Option>
            ))}
        </Container>
    );
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

const Option = styled.li`
    min-height: 1.5rem;
    padding-left: 0.125rem;
`;
