import React from 'react';

import HomeHero from '../components/HomeHero';
import Feature from '../components/Feature';
import Column from '../components/Column';
import Button from '../components/Button';
import Box from '../components/Box';

function CenteredBanner() {
  return (
    <Column width="100%" alignItems="center" padding="64px 0">
      <Column
        width="100%"
        maxWidth="798px"
        textAlign="center"
        alignItems="center"
        padding="0 24px"
      >
        <h2>Donec mi lectus</h2>
        <p>
          Nam nisi tellus, faucibus pharetra porta eu, aliquet vel mauris. Sed
          mauris ipsum, egestas ut lobortis non, luctus eget dolor. Cras ligula
          augue, malesuada ut dapibus ut, commodo quis dui. Duis vitae tempus
          mi, vel venenatis arcu. Sed sed posuere sapien. Pellentesque ac leo
          metus. Aenean quam tortor, volutpat in blandit ac, finibus eget enim.
        </p>
      </Column>
    </Column>
  );
}

export default function HomePage() {
  return (
    <Column minWidth="100%" minHeight="100%">
      <HomeHero />
      <CenteredBanner />

      <Column backgroundColor="#f6f6f6" width="100%" alignItems="center">
        <Feature>
          {({ LeftContent, RightContent }) => (
            <React.Fragment>
              <LeftContent>
                <h2>Donec mi lectus</h2>
                <p>
                  Nam nisi tellus, faucibus pharetra porta eu, aliquet vel
                  mauris. Sed mauris ipsum, egestas ut lobortis non, luctus eget
                  dolor. Cras ligula augue, malesuada ut dapibus ut, commodo
                  quis dui. Duis vitae tempus mi, vel venenatis arcu. Sed sed
                  posuere sapien. Pellentesque ac leo metus. Aenean quam tortor,
                  volutpat in blandit ac, finibus eget enim.
                </p>
              </LeftContent>
            </React.Fragment>
          )}
        </Feature>

        <Feature>
          {({ LeftContent, RightContent }) => (
            <React.Fragment>
              <RightContent>
                <h2>Donec mi lectus</h2>
                <p>
                  Nam nisi tellus, faucibus pharetra porta eu, aliquet vel
                  mauris. Sed mauris ipsum, egestas ut lobortis non, luctus eget
                  dolor. Cras ligula augue, malesuada ut dapibus ut, commodo
                  quis dui. Duis vitae tempus mi, vel venenatis arcu. Sed sed
                  posuere sapien. Pellentesque ac leo metus. Aenean quam tortor,
                  volutpat in blandit ac, finibus eget enim.
                </p>
              </RightContent>
            </React.Fragment>
          )}
        </Feature>

        <Feature>
          {({ LeftContent, RightContent }) => (
            <React.Fragment>
              <LeftContent>
                <h2>Donec mi lectus</h2>
                <p>
                  Nam nisi tellus, faucibus pharetra porta eu, aliquet vel
                  mauris. Sed mauris ipsum, egestas ut lobortis non, luctus eget
                  dolor. Cras ligula augue, malesuada ut dapibus ut, commodo
                  quis dui. Duis vitae tempus mi, vel venenatis arcu. Sed sed
                  posuere sapien. Pellentesque ac leo metus. Aenean quam tortor,
                  volutpat in blandit ac, finibus eget enim.
                </p>
              </LeftContent>
            </React.Fragment>
          )}
        </Feature>
      </Column>

      <Column width="100%" alignItems="center" padding="64px 0">
        <Column
          width="100%"
          maxWidth="798px"
          textAlign="center"
          alignItems="center"
          padding="0 24px"
        >
          <h2 style={{ marginBottom: '0' }}>Maecenas placerat consectetur</h2>

          <Column padding="36px 0 0" alignItems="center">
            <Button>Get Started</Button>

            <Box padding="36px 0 0" textAlign="center">
              <p>Sed eleifend, urna ut tincidunt tincidunt.</p>
            </Box>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
