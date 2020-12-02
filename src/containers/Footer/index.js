import React from "react";
import { Wrapper } from "../../components";
import { Logo } from "../../assets";
import { Container, FooterNav } from "./footerStyles";

const Footer = () => {
    return (
        <Container>
            <Wrapper header>
                <FooterNav>
                    <Logo />
                    <NavList />
                </FooterNav>
            </Wrapper>
        </Container>
    );
};

const NavList = () => {
    return (
        <ul>
            <li>
                <a href="/">Help</a>
            </li>
            <li>
                <a href="/">Contact Us</a>
            </li>
            <li>
                <a href="/">Support Us</a>
            </li>
        </ul>
    );
};

export default Footer;