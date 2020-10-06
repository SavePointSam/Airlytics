import styled from '@emotion/styled/macro';

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between';

type Align = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export interface Props {
  flexDirection?: Direction;
  wrap?: boolean;
  justifyContent?: Justify;
  alignItems?: Align;
  alignSelf?: Align;
  flex?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  boxShadow?: string;
  textAlign?: string;
  children?: React.ReactNode;
}

const Box = styled('div')<Props>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: ${({ flexDirection = 'row' }) => flexDirection}
    ${({ wrap = false }) => (wrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  flex: ${({ flex = '0 1 auto' }) => flex};
  width: ${({ width = 'auto' }) => width};
  min-width: ${({ minWidth = 'none' }) => minWidth};
  max-width: ${({ maxWidth = 'none' }) => maxWidth};
  height: ${({ height = 'auto' }) => height};
  min-height: ${({ minHeight = 'auto' }) => minHeight};
  padding: ${({ padding = '0' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  box-shadow: ${({ boxShadow = 'none' }) => boxShadow};
`;

export default Box;
