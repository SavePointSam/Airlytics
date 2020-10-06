import React from 'react';

import Column from './Column';
import Row from './Row';

interface ContentProps {
  children?: React.ReactNode;
}

function LeftContent({ children }: ContentProps) {
  return (
    <Column width="50%" alignSelf="flex-start" padding="0 12px 0 0">
      {children}
    </Column>
  );
}

function RightContent({ children }: ContentProps) {
  return (
    <Column width="50%" margin="0 0 0 auto" padding="0 0 0 12px">
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
  return (
    <Row
      width="100%"
      maxWidth="1024px"
      textAlign="center"
      alignItems="center"
      padding="64px 24px"
    >
      {children({ LeftContent, RightContent })}
    </Row>
  );
}
