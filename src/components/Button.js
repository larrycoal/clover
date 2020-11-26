import styled, { css } from "styled-components";
import { colors } from "../utils";

export const Button = styled.button`
    background-color: ${colors.neutral};
    padding: 10px 25px;
    font-size: 1.125rem;
    letter-spacing: 1px;
    border-radius: 1.5rem;;
    color: ${colors.dark};
    border: none;
    outline: none;
    cursor: pointer;
    white-space: nowrap;

    ${props => props.primary && css`
        background: ${colors.primary};
        color: #fff;
    `}

    &:hover {
        background: ${colors.primary};
        color: ${colors.neutral};
        transition: all 0.3s ease-in-out;
    }
`;