import React from 'react';
import { Link } from 'react-router-dom';

import Row from './Row';

export default function Footer() {
  return (
    <Row
      alignItems="center"
      height="32px"
      padding="0 24px"
      backgroundColor="#f6f6f6"
      justifyContent="space-between"
    >
      <p style={{ fontSize: '12px', margin: '0' }}>&copy; Airlytics 2020</p>

      <Link to="contact">Contact</Link>
    </Row>
  );
}
