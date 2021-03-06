import styled from "styled-components";
import { colors, visuallyHidden } from "../../utils";

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

    @media screen and (max-width: 768px) {
        ${visuallyHidden}
    }
}
`;
