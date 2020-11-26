import styled from "styled-components";

export const JoinUsContainer = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * + * {
        margin-top: 1.5rem;

        @media screen and (max-width: 768px) {
         margin-top: 1rem;
        }
    }

    @media screen and (max-width: 768px) {
        margin-top: 4.5rem;
    }
`;

export const JoinUsCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    
    > * {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        flex-grow: 1;
        flex-basis: calc((30rem - 100%) * 999);
    }

    @media screen and (max-width: 768px) {
        margin-top: 1rem;

        > * + * {
            margin-top: 2.5rem;
        }
    }

    @media screen and (min-width: 768px) {
        margin-top: 1rem;

        > * {
            margin-top: 2.5rem;
        }
    }
`;