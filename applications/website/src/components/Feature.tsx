import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Column from './Column';
import Box from './Box';

interface ContentProps {
  isImage?: boolean;
  children?: React.ReactNode;
}

const smallQuery = '(max-width: 768px)';

function LeftContent({ children, isImage = false }: ContentProps) {
  const isSmall = useMediaQuery({ query: smallQuery });
  let order = '0';
  let margin = '0';

  if (isSmall === true && isImage !== true) {
    order = '1';
    margin = '24px 0 0';
  }

  return (
    <Column
      width={isSmall === true ? '100%' : '50%'}
      alignSelf="flex-start"
      margin={margin}
      padding={isSmall === true ? '0' : '0 12px 0 0'}
      order={order}
    >
      {children}
    </Column>
  );
}

function RightContent({ children, isImage = false }: ContentProps) {
  const isSmall = useMediaQuery({ query: smallQuery });
  let order = '0';
  let margin = '0 0 0 auto';

  if (isSmall === true && isImage !== true) {
    order = '1';
    margin = '24px 0 0';
  }

  return (
    <Column
      width={isSmall === true ? '100%' : '50%'}
      margin={margin}
      padding={isSmall === true ? '0' : '0 0 0 12px'}
      order={order}
    >
      {children}
    </Column>
  );
}

interface Props {
  children: (data: {
    LeftContent: typeof LeftContent;
    RightContent: typeof RightContent;
  }) => React.ReactNode;
}

export default function Feature({ children }: Props) {
  const isSmall = useMediaQuery({ query: smallQuery });

  return (
    <Box
      flexDirection={isSmall === true ? 'column' : 'row'}
      width="100%"
      maxWidth="1024px"
      textAlign="center"
      alignItems="center"
      padding="64px 24px"
    >
      {children({ LeftContent, RightContent })}
    </Box>
  );
}
