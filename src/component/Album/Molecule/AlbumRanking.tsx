import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';
import { Atom } from '..';

interface AlbumRankingProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  backgroundColor: CSSProperties['backgroundColor'];
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
  width,
  height,
  items,
  title,
  titleRightComponent,
}) => {
  return (
    <Container width={width} height={height} backgroundColor={backgroundColor}>
      <TitleContainer>
        <div>{title.text}</div>
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
            />
          );
        })}
      </AlbumContainer>
    </Container>
  );
};

const Container = styled.div<Pick<AlbumRankingProps, 'width' | 'height' | 'backgroundColor'>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
`;

const TitleContainer = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

const AlbumContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default AlbumRanking;
