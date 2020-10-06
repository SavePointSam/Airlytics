import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from './Button';
import Row from './Row';
import Column from './Column';

export default function HomeHero() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
  const isTinyScreen = useMediaQuery({ query: '(max-width: 614px)' });
  let leftPadding = '20%';

  if (isSmallScreen === true) leftPadding = '10%';
  if (isTinyScreen === true) leftPadding = '0';

  return (
    <Row
      width="100%"
      padding={`0 0 0 ${leftPadding}`}
      backgroundColor="#AAA"
      minHeight="550px"
      alignItems="center"
    >
      <Column width="100%" maxWidth="500px" padding="0 24px">
        <h1>Analytics Made Easy</h1>
        <p>
          Pellentesque dictum eleifend odio, non tempor tellus commodo non.
          Pellentesque nec lectus ut sem faucibus convallis in in libero.
        </p>
        <Column padding="24px 0 0">
          <Button>Get Started</Button>
        </Column>
      </Column>
    </Row>
  );
}
