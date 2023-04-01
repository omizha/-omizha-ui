import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

export interface BigThumbnailProps {
  thumbnailUrl: string;
  thumbnailWidth: CSSProperties['width'];
  thumbnailHeight: CSSProperties['height'];
  title: string;
  artist: string;
  className?: string;
}

const BigThumbnail: React.FC<BigThumbnailProps> = ({ artist, thumbnailHeight, thumbnailUrl, thumbnailWidth, title, className }) => {
  return (
    <Container className={className}>
      <Thumbnail src={thumbnailUrl} width={thumbnailWidth} height={thumbnailHeight} />
      <div>{title}</div>
      <div>{artist}</div>
    </Container>
  );
};

const Container = styled.div``;

const Thumbnail = styled.img<{
  width: CSSProperties['width'];
  height: CSSProperties['height'];
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default BigThumbnail;
