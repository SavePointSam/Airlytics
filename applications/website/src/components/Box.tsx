import styled from '@emotion/styled/macro';

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between';

type Align = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export interface Props {
  flexDirection?: Direction;
  wrap?: boolean;
  justifyContent?: Justify;
  alignItems?: Align;
  flex?: string;
  children?: React.ReactNode;
}

const Box = styled('div')<Props>`
  display: flex;
  flex-flow: ${({ flexDirection = 'row' }) => flexDirection}
    ${({ wrap = false }) => (wrap ? 'wrap' : 'no-wrap')};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  flex: ${({ flex = '0 1 auto' }) => flex};
  position: relative;
`;

export default Box;
