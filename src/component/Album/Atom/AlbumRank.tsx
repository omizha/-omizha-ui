import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

export interface AlbumRankProps {
  height?: CSSProperties['height'];
  border?: CSSProperties['border'];
  backgroundColor?: CSSProperties['backgroundColor'];
  textColor?: CSSProperties['color'];
  thumbnailUrl: string;
  rank: number;
  rankChange: number;
  rankContainerWidth?: CSSProperties['width'];
  title: string;
  artist: string;
  className?: string;
}

const AlbumRank: React.FC<AlbumRankProps> = ({
  className,
  rankContainerWidth = '50px',
  backgroundColor,
  textColor,
  height,
  border,
  artist,
  rank,
  rankChange,
  thumbnailUrl,
  title,
}) => {
  return (
    <Container className={className} height={height} border={border} textColor={textColor} backgroundColor={backgroundColor}>
      <Thumbnail src={thumbnailUrl} />
      <RankContainer width={rankContainerWidth}>
        <div>{rank}</div>
        <div>{rankChange}</div>
      </RankContainer>
      <TextContainer>
        <div>{title}</div>
        <div>{artist}</div>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div<Pick<AlbumRankProps, 'height' | 'border' | 'textColor' | 'backgroundColor'>>`
  display: flex;
  padding: 8px;
  box-sizing: border-box;

  ${({ height }) => height && `height: ${height};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ textColor }) => textColor && `color: ${textColor};`}
`;

const Thumbnail = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
`;

const RankContainer = styled.div<{ width: CSSProperties['width'] }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export default AlbumRank;
