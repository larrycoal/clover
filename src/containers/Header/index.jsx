import React, { useState } from "react";
import { Logo } from "../../assets";
import { FaBars } from "react-icons/fa";
import { Wrapper, Button } from "../../components";
import { Link } from "react-router-dom"
import {
    Container,
    DesktopNav,
    HamburgerIcon,
    MobileNav
} from "./headerStyles";

const Header = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const handleToggleNav = () => setToggleNav(!toggleNav);

    return (
        <Container>
            <Wrapper header>
                <DesktopNav>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <HamburgerIcon onClick={handleToggleNav} toggleNav={toggleNav}>
                        <FaBars />
                    </HamburgerIcon>
                    <NavList />
                </DesktopNav>
                <MobileNav toggleNav={toggleNav}>
                    <NavList />
                </MobileNav>
            </Wrapper>
        </Container>
    );
};

const NavList = () => {
    return (
        <ul>
            <li>
                <Link to="/help">Help</Link>
            </li>
            <li>
                <Link to="/about-us">About us</Link>
            </li>
            <li>
                <Button>Get Help</Button>
            </li>
        </ul>
    );
};

export default Header;