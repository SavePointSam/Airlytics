import React from 'react';

import Box, { Props } from './Box';

export default function Column(props: Props) {
  return <Box {...props} flexDirection="column" />;
}
