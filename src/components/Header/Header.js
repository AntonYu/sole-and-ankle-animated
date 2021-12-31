import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <DesktopNav>
                    <NavLink href="/sale">
                        <NavLinkFront data-hover="Sale">Sale</NavLinkFront>
                    </NavLink>
                    <NavLink href="/new">
                        <NavLinkFront data-hover="New&nbsp;Releases">New&nbsp;Releases</NavLinkFront>
                    </NavLink>
                    <NavLink href="/men">
                        <NavLinkFront data-hover="Men">Men</NavLinkFront>
                    </NavLink>
                    <NavLink href="/women">
                        <NavLinkFront data-hover="Women">Women</NavLinkFront>
                    </NavLink>
                    <NavLink href="/kids">
                        <NavLinkFront data-hover="Kids">Kids</NavLinkFront>
                    </NavLink>
                    <NavLink href="/collections">
                        <NavLinkFront data-hover="Collections">Collections</NavLinkFront>
                    </NavLink>
                </DesktopNav>
                <MobileActions>
                    <ShoppingBagButton>
                        <Icon id="shopping-bag" />
                        <VisuallyHidden>Open cart</VisuallyHidden>
                    </ShoppingBagButton>
                    <UnstyledButton>
                        <Icon id="search" />
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" />
                        <VisuallyHidden>Open menu</VisuallyHidden>
                    </UnstyledButton>
                </MobileActions>
                <Filler />
            </MainHeader>

            <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    border-bottom: 1px solid var(--color-gray-300);
    overflow: auto;

    @media ${QUERIES.tabletAndSmaller} {
        justify-content: space-between;
        align-items: center;
        border-top: 4px solid var(--color-gray-900);
    }

    @media ${QUERIES.phoneAndSmaller} {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
    margin: 0px 48px;
    perspective: 500px;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const MobileActions = styled.div`
    display: none;

    @media ${QUERIES.tabletAndSmaller} {
        gap: 32px;
        display: flex;
    }

    @media ${QUERIES.phoneAndSmaller} {
        gap: 16px;
    }
`;

const LogoWrapper = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        flex: revert;
    }
`;

const ShoppingBagButton = styled(UnstyledButton)`
    transform: translateX(-2px);
`;

const Filler = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const NavLinkFront = styled.span`
    display: inline-block;
    will-change: transform;
    backface-visibility: hidden;

    &::before {
        content: attr(data-hover);
        position: absolute;
        top: 100%;
        transform: translateY(0);
        font-weight: ${WEIGHTS.bold};
        display: inline-block;
        backface-visibility: hidden;
        will-change: transform;
    }

    @media (prefers-reduced-motion: no-preference) {
        transition: transform 300ms;
        &::before {
            transition: transform 300ms;
        }
    }
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: ${WEIGHTS.medium};
    color: var(--color-gray-900);
    position: relative;
    overflow: hidden;

    &:first-of-type {
        color: var(--color-secondary);
    }

    &:hover ${NavLinkFront}, &:focus ${NavLinkFront} {
        transform: translateY(-100%);
    }

    @media (prefers-reduced-motion: no-preference) {
        &:hover ${NavLinkFront}, &:focus ${NavLinkFront} {
            transition: transform 300ms;
        }
    }
`;

export default Header;
