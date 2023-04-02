/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { Atom } from '..';

interface AlbumPicturesProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  backgroundColor: CSSProperties['backgroundColor'];
  textColor?: CSSProperties['color'];
  title: {
    text: string;
    link?: string;
  };
  titleRightComponent: React.ReactNode;
  items: {
    id: string;
    thumbnailUrl: string;
    title: string;
    artist: string;
  }[];
  albumComponent: React.FC<Atom.BigThumbnailProps>;
  thumbnailWidth?: CSSProperties['width'];
  thumbnailHeight?: CSSProperties['height'];
}

const AlbumPictures = ({
  albumComponent = Atom.BigThumbnail,
  backgroundColor,
  textColor,
  width,
  height,
  items,
  title,
  titleRightComponent,
  thumbnailHeight,
  thumbnailWidth,
}: AlbumPicturesProps) => {
  return (
    <Container width={width} height={height} backgroundColor={backgroundColor} textColor={textColor}>
      <TitleContainer>
        <h3>{title.text}</h3>
        {titleRightComponent}
      </TitleContainer>
      <AlbumContainer>
        {items.map((item) => {
          const AlbumComponent = albumComponent;
          return (
            <AlbumComponent
              key={item.id}
              thumbnailUrl={item.thumbnailUrl}
              title={item.title}
              artist={item.artist}
              thumbnailWidth={thumbnailWidth}
              thumbnailHeight={thumbnailHeight}
              css={css({
                width: thumbnailWidth,
              })}
            />
          );
        })}
      </AlbumContainer>
    </Container>
  );
};

const Container = styled.div<Pick<AlbumPicturesProps, 'width' | 'height' | 'backgroundColor' | 'textColor'>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  ${({ textColor }) => textColor && `color: ${textColor};`}
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 16px;
`;

export default AlbumPictures;
