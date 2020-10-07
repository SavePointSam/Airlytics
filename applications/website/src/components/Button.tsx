import React from 'react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

type Theme = 'primary' | 'secondary';

interface Props {
  to: string;
  children: React.ReactNode;
  theme?: Theme;
}

export default function Button({ to, children, theme = 'primary' }: Props) {
  return (
    <StyledLink to={to} buttonTheme={theme}>
      {children}
    </StyledLink>
  );
}

interface StyledProps {
  buttonTheme: Theme;
}

const StyledLink = styled(Link)<StyledProps>`
  border-radius: 24px;
  background-color: ${({ buttonTheme }) =>
    buttonTheme === 'secondary' ? '#000000' : '#f47c20'};
  color: #ffffff;
  padding: 0 36px;
  height: 48px;
  border: 0;
  display: flex;
  align-items: center;
  font-weight: bold;

  &:hover {
    margin: 0;
    color: #ffffff;
    background-color: ${({ buttonTheme }) =>
      buttonTheme === 'secondary' ? '#2a3137' : '#f68d3c'};
    border: 0;
  }
`;
