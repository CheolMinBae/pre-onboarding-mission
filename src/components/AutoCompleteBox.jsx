import { styled } from "styled-components";

export default function AutoCompleteBox({ children, show }) {
    if (!show) return;
    return <Container>{children}</Container>;
}

const Container = styled.div`
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
