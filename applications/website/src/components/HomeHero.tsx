import React from 'react';
import { useMediaQuery } from 'react-responsive';

import heroImageTiny from '../images/hero_tiny.jpg';
import heroImageSmall from '../images/hero_small.jpg';
import heroImageLarge from '../images/hero_large.jpg';
import heroImageXlarge from '../images/hero_xlarge.jpg';
import Button from './Button';
import Row from './Row';
import Column from './Column';

export default function HomeHero() {
  const isSmall = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Row
      width="100%"
      minHeight={isSmall === true ? '350px' : '550px'}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#000000"
    >
      <Column
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="0"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={heroImageSmall}
          srcSet={`${heroImageTiny} 300w, ${heroImageSmall} 1024w, ${heroImageLarge} 1366w, ${heroImageXlarge} 1920w`}
          style={{ opacity: '0.5' }}
        />
      </Column>
      <Column width="100%" maxWidth="1024px" zIndex="1">
        <Column width="100%" maxWidth="500px" padding="0 24px">
          <h1 className="invert">Analytics Made Easy</h1>
          <p className="invert">
            Pellentesque dictum eleifend odio, non tempor tellus commodo non.
            Pellentesque nec lectus ut sem faucibus convallis in in libero.
          </p>
          <Column padding="24px 0 0">
            <Button>Get Started</Button>
          </Column>
        </Column>
      </Column>
    </Row>
  );
}
