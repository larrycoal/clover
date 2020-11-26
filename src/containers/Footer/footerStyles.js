import styled from "styled-components";
import { colors } from "../../utils";

export const Container = styled.footer`
    background: ${colors.primary};
    color: ${colors.neutral};
    width: 100%;
    min-height: 4rem;
    margin-top: 6rem;

    @media screen and (max-height: 768px) {
        margin-top: 4.5rem;
    }
`;

export const FooterNav = styled.nav`
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
