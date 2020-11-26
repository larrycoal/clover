import styled, { css } from "styled-components";
import { colors } from "../../utils";



export const Container = styled.header`
    background: ${colors.primary};
    color: ${colors.neutral};
    width: 100%;
    min-height: 4rem;
    overflow: hidden;
`;

export const DesktopNav = styled.nav`
    display: flex;
    align-items: center;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

    > :first-child {
        height: 1.875rem;
        margin-right: auto;
        cursor: pointer;
    }

    > ul {
        display: flex;
        align-items: center;

        > * + * {
            margin-left: 2rem;
        }

        a:hover, 
        a:active, 
        .active {
            border-bottom: 4px solid ${colors.neutral};
            padding-bottom: 1.1rem;
        }

        @media screen and (max-width: 768px) {
            width: 1px;
            height: 1px;
            position: absolute;
            clip: rect(0,0,0,0);
            clip-path: inset(-50%);
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

    ${props => props.toggleNav && css`
        transform: rotate(90deg);
    `}

    @media screen and (min-width: 769px) {
        width: 1px;
        height: 1px;
        position: absolute;
        clip: rect(0,0,0,0);
        clip-path: inset(-50%);
    }
`;

export const MobileNav = styled.nav`
    transition: height 0.3s ease-in-out;
    height: ${props => props.toggleNav ? "13rem" : "0px"};
    overflow: hidden;
    
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
