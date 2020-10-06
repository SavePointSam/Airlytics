import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Row from './Row';

export default function MainNavigation() {
  return (
    <Row justifyContent="space-between">
      <Row>
        <Link to="/">Home</Link>
      </Row>
      <Row>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </Row>
    </Row>
  );
}
