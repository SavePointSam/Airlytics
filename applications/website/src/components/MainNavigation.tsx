import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled/macro';

import { useModal } from '../context/modal';
import Row from './Row';
import Column from './Column';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import IconButton from './IconButton';

const ModalContainer = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  background-color: #ffffff;
  scroll-x: hidden;
  scroll-y: auto;
`;

const LogoNavLink = styled(NavLink)`
  font-family: 'Berkshire Swash', cursive;
  font-size: 24px;

  &:hover {
    color: #040d14;
    border: none;
    margin-bottom: 0;
  }
`;

const StyledTinyNavLink = styled(NavLink)`
  font-size: 18px;
  margin-top: 18px;
`;

function ModalNavigation() {
  const { dismiss } = useModal();
  const handleClick = () => dismiss();

  return (
    <ModalContainer>
      <Column flex="1 1 auto" alignItems="center">
        <Row
          flex="1 1 auto"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          height="64px"
          padding="0 24px"
        >
          <LogoNavLink to="/" onClick={handleClick}>
            Airlytics
          </LogoNavLink>

          <IconButton onClick={handleClick}>
            <CloseIcon />
          </IconButton>
        </Row>

        <StyledTinyNavLink to="about" onClick={handleClick}>
          About
        </StyledTinyNavLink>

        <StyledTinyNavLink to="contact" onClick={handleClick}>
          Contact
        </StyledTinyNavLink>
      </Column>
    </ModalContainer>
  );
}

function TinyNavigation() {
  const { appoint } = useModal();

  return (
    <IconButton onClick={() => appoint(<ModalNavigation />)}>
      <MenuIcon />
    </IconButton>
  );
}

const StyledNavLink = styled(NavLink)`
  margin-left: 48px;
  font-size: 18px;
`;

function LargeNavigation() {
  return (
    <React.Fragment>
      <StyledNavLink to="about">About</StyledNavLink>
      <StyledNavLink to="contact">Contact</StyledNavLink>
    </React.Fragment>
  );
}

export default function MainNavigation() {
  const isTinyNavigation = useMediaQuery({ query: '(max-width: 420px)' });

  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      height="64px"
      padding="0 24px"
      backgroundColor="#ffffff"
      boxShadow="0px 1px 4px 0px rgba(0,0,0,0.2)"
    >
      <Row>
        <LogoNavLink to="/">Airlytics</LogoNavLink>
      </Row>
      <Row>{isTinyNavigation ? <TinyNavigation /> : <LargeNavigation />}</Row>
    </Row>
  );
}
