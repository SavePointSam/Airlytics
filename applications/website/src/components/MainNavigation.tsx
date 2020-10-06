import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled/macro';

import { useModal } from '../context/modal';
import Row from './Row';
import Column from './Column';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

const ModalContainer = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  background-color: #80deea;
  scroll-x: hidden;
  scroll-y: auto;
`;

function ModalNavigation() {
  const { dismiss } = useModal();

  return (
    <ModalContainer>
      <Column flex="1 1 auto">
        <Row flex="1 1 auto" justifyContent="flex-end" width="100%">
          <button type="button" onClick={() => dismiss()}>
            <CloseIcon />
          </button>
        </Row>

        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </Column>
    </ModalContainer>
  );
}

function TinyNavigation() {
  const { appoint } = useModal();

  return (
    <button type="button" onClick={() => appoint(<ModalNavigation />)}>
      <MenuIcon />
    </button>
  );
}

function LargeNavigation() {
  return (
    <React.Fragment>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </React.Fragment>
  );
}

export default function MainNavigation() {
  const isTinyNavigation = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Row justifyContent="space-between">
      <Row>
        <Link to="/">Home</Link>
      </Row>
      <Row>{isTinyNavigation ? <TinyNavigation /> : <LargeNavigation />}</Row>
    </Row>
  );
}
