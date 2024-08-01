import { styled } from "styled-components";

export default function AutoCompleteBox({ children, show }) {
    if (!show) return;
    return <Container>{children}</Container>;
}

const Container = styled.div`
    position: absolute;
    z-index: 1;
    top: 2.5rem;
    width: 24rem;
    margin: 0px;
    padding: 0px;
    padding-top: 0.45rem;
    border: 1px solid #cdcdcd;
    border-radius: 0.2rem;
`;
