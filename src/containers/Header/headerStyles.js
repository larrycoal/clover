import styled, { css } from "styled-components";
import { colors, visuallyHidden } from "../../utils";

export const Container = styled.header`
    background: ${colors.primary};
    color: ${colors.neutral};
    width: 100%;
    min-height: 4rem;
    overflow: hidden;
    font-weight: 500;
    font-size: 1.125rem;
`;

export const DesktopNav = styled.nav`
    display: flex;
    align-items: center;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

    > :first-child {
        margin-right: auto;
        z-index: 10;
    }

    > ul {
        display: flex;
        align-items: center;

        > * + * {
            margin-left: 2rem;
        }

        @media screen and (max-width: 768px) {
            ${visuallyHidden}
        }
    }
`;

export const HamburgerIcon = styled.button`
    border: none;
    background: transparent;
    outline: none;
    transition: transform 0.3s ease-out;
    font-size: 1.675rem;
    color: ${colors.neutral};
    display: flex;
    align-items: center;
    z-index:10;
    
    ${props => props.toggleNav && css`
        transform: rotate(90deg);
    `}

    @media screen and (min-width: 769px) {
        ${visuallyHidden}
    }
`;

export const MobileNav = styled.nav`
    transition: height 0.3s ease-in-out;
    height: ${props => props.toggleNav ? "13rem" : "0px"};
    
    * {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    > ul {
        > * + * {
            margin-top: 2rem;
        }
    }
`;
