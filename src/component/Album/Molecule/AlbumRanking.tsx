import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { Atom } from '..';

interface AlbumRankingProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  itemHeight?: CSSProperties['height'];
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
    rank: number;
    rankChange: number;
    title: string;
    artist: string;
  }[];
  albumComponent?: React.FC<Atom.AlbumRankProps>;
}

const AlbumRanking: React.FC<AlbumRankingProps> = ({
  albumComponent = Atom.AlbumRank,
  backgroundColor,
  textColor,
  width,
  height,
  itemHeight,
  items,
  title,
  titleRightComponent,
}) => {
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
              rank={item.rank}
              rankChange={item.rankChange}
              title={item.title}
              artist={item.artist}
              textColor={textColor}
              height={itemHeight}
            />
          );
        })}
      </AlbumContainer>
    </Container>
  );
};

const Container = styled.div<Pick<AlbumRankingProps, 'width' | 'height' | 'backgroundColor' | 'textColor'>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  ${(props) => props.textColor && `color: ${props.textColor};`}

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlbumContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
`;

export default AlbumRanking;
