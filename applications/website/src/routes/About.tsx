import React from 'react';

import Column from '../components/Column';
import Row from '../components/Row';
import profileImage from '../images/profile_photo.jpg';

interface Props {
  imageURL?: string;
  name: string;
  title: string;
}

function TeamMemberCard({ imageURL, name, title }: Props) {
  return (
    <Column margin="24px auto">
      <Column padding="24px">
        <Column
          width="200px"
          height="200px"
          borderRadius="24px"
          margin="0 0 24px"
          overflow="hidden"
        >
          <img style={{ width: '100%' }} src={imageURL} />
        </Column>
        <p>{name}</p>
        <p>{title}</p>
      </Column>
    </Column>
  );
}

export default function AboutPage() {
  return (
    <Column
      minWidth="100%"
      backgroundColor="#f6f6f6"
      padding="24px"
      alignItems="center"
    >
      <Column maxWidth="1024px" padding="64px" backgroundColor="#ffffff">
        <Column width="100%" alignItems="center">
          <h2>About Airlytics</h2>
          <p>
            Nam nisi tellus, faucibus pharetra porta eu, aliquet vel mauris. Sed
            mauris ipsum, egestas ut lobortis non, luctus eget dolor. Cras
            ligula augue, malesuada ut dapibus ut, commodo quis dui.
          </p>
          <p>
            Duis vitae tempus mi, vel venenatis arcu. Sed sed posuere sapien.
            Pellentesque ac leo metus. Aenean quam tortor, volutpat in blandit
            ac, finibus eget enim.
          </p>
          <p>
            Maecenas placerat consectetur lectus a vehicula. Sed eleifend, urna
            ut tincidunt tincidunt, metus mi sodales lorem, quis gravida tellus
            risus sed augue. Maecenas commodo mi pellentesque lobortis
            tincidunt. Ut tellus erat, dictum nec magna et, consequat sodales
            sapien.
          </p>
        </Column>

        <Column width="100%" alignItems="center" padding="64px 0 0">
          <h2>Team</h2>

          <Row
            width="100%"
            justifyContent="center"
            wrap={true}
            alignItems="center"
          >
            <TeamMemberCard
              name="Sed Mauris"
              title="CEO, Co-founder"
              imageURL={profileImage}
            />

            <TeamMemberCard
              name="Metus Mi"
              title="CTO, Co-founder"
              imageURL={profileImage}
            />

            <TeamMemberCard
              name="Fusce Congue"
              title="CDO, Co-founder"
              imageURL={profileImage}
            />
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
