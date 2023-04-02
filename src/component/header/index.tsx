import styled from '@emotion/styled';
import React, { type CSSProperties } from 'react';

interface HeaderProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  background?: CSSProperties['background'];
  leftCompoennt?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ width, height, background, leftCompoennt = <></>, rightComponent = <></> }) => {
  return (
    <Container width={width} height={height} background={background} className="flex items-center justify-between">
      {leftCompoennt}
      {rightComponent}
    </Container>
  );
};

const Container = styled.div<Pick<HeaderProps, 'width' | 'height' | 'background'>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${({ background }) => background && `background: ${background};`}
`;

export default Header;
