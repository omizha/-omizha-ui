import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

export interface BigThumbnailProps {
  title: string;
  artist: string;
  thumbnailUrl: string;
  thumbnailWidth?: CSSProperties['width'];
  thumbnailHeight?: CSSProperties['height'];
  textColor?: CSSProperties['color'];
  className?: string;
}

const BigThumbnail = ({ artist, thumbnailHeight, thumbnailUrl, thumbnailWidth, title, className, textColor }: BigThumbnailProps) => {
  return (
    <Container textColor={textColor} className={className}>
      <Thumbnail src={thumbnailUrl} width={thumbnailWidth} height={thumbnailHeight} />
      <div>{title}</div>
      <div>{artist}</div>
    </Container>
  );
};

const Container = styled.div<{
  textColor?: CSSProperties['color'];
}>`
  ${({ textColor }) => textColor && `color: ${textColor};`}
`;

const Thumbnail = styled.img<{
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}>`
  ${({ width, height }) =>
    (!width || !height) &&
    css({
      aspectRatio: '1',
    })}

  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;

export default BigThumbnail;
