import React from 'react';
import styled from '@emotion/styled/macro';

interface Props {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = styled('button')`
  background: none;
  border: none;
  padding: 0;
`;

export default function IconButton({ children, onClick }: Props) {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
}
