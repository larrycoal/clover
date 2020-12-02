import styled from "styled-components";

export const FaqContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 6rem;

    > * {
        flex-grow: 1;
        flex-basis: calc((30rem - 100%) * 999);
    }

    li {
        display: flex;
        
        > * + * {
            margin-left: 1.5rem;
        }

        > :last-child {
            > * + * {
                margin-top: 0.5rem;
            }
        }
    }

    @media screen and (max-width: 768px) {
        margin-top: 4.5rem;
        
        h2 {
            text-align: center;
        }

        > * + * {
            margin-top: 1rem;
        }
    }
`;