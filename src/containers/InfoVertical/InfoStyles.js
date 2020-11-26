import styled, { css } from "styled-components";
import { colors } from "../../utils";

export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.dark};
    text-align: center;
    gap: 5rem;
    margin-top: 6rem;

    > :first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ${props => props.imageStart && css`
        > :last-child {
            order: -1;
        }  
    `}

    @media screen and (max-width: 768px) {
        gap: 2.5rem;
        margin-top: 4.5rem;
    }
`;