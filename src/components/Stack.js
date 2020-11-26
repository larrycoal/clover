import styled from "styled-components";

export const Stack = styled.div`
    > * + * {
        margin-top: 1.5rem;

        @media screen and (max-width: 768px) {
            margin-top: 1rem;
        }
    }
`;