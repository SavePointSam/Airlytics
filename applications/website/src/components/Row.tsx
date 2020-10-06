import React from 'react';

import Box, { Props } from './Box';

export default function Row(props: Props) {
  return <Box {...props} flexDirection="row" />;
}
