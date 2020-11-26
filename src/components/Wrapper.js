import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: ${props => props.header ? "80rem": "62rem"};
    height: inherit;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
`;