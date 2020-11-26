import styled, { css } from "styled-components";
import { colors } from "../../utils";

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    color: ${colors.dark};
    gap: 5rem;
    margin-top: 6rem;
    

    ${props => props.imageStart && css`
        text-align: right;

        > :first-child {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        > :last-child {
            order: -1;
        }  
    `}

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        gap: 2.5rem;
        margin-top: 4.5rem;

        > :first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;