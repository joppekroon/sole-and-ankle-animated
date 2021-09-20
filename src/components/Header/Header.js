import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

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
            <span class="default-text">Sale</span>
            <span class="hover-text">Sale</span>
          </NavLink>
          <NavLink href="/new">
            <span class="default-text">New&nbsp;Releases</span>
            <span class="hover-text">New&nbsp;Releases</span>
          </NavLink>
          <NavLink href="/men">
            <span class="default-text">Men</span>
            <span class="hover-text">Men</span>
          </NavLink>
          <NavLink href="/women">
            <span class="default-text">Women</span>
            <span class="hover-text">Women</span>
          </NavLink>
          <NavLink href="/kids">
            <span class="default-text">Kids</span>
            <span class="hover-text">Kids</span>
          </NavLink>
          <NavLink href="/collections">
            <span class="default-text">Collections</span>
            <span class="hover-text">Collections</span>
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

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
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

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
  
  & .default-text,
  & .hover-text {
    display: block;
    
    width: 100%;
    height: 100%;
    
    will-change: transform;
    transition: transform 500ms;
    transform: translateY(var(--translate-from));
  }
  
  & .default-text {
    --translate-from: 0%;
    --translate-to: -100%;
    
    font-weight: ${WEIGHTS.medium};
  }
  & .hover-text {
    --translate-from: 100%;
    --translate-to: 0%;
    
    position: absolute;
    top: 0;
    left: 0;
    
    font-weight: ${WEIGHTS.bold};
  }
  
  @media (prefers-reduced-motion: no-preference) {
    &:hover .default-text,
    &:hover .hover-text {
      transform: translateY(var(--translate-to));
      transition-duration: 250ms;
    }
  }
`;

export default Header;
