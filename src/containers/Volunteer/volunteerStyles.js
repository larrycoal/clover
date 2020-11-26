import styled from "styled-components";

export const VolunteerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
    text-align: center;

    h4 {
        font-size: 1.6875rem;
    }

    > * {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        margin-top: 4.5rem;
    }
`;