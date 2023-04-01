import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

export interface AlbumProps {
  height?: CSSProperties['height'];
  border?: CSSProperties['border'];
  thumbnailUrl: string;
  rank: number;
  rankChange: number;
  rankContainerWidth?: CSSProperties['width'];
  title: string;
  artist: string;
  className?: string;
}

const Album: React.FC<AlbumProps> = ({
  className,
  rankContainerWidth = '50px',
  height = '50px',
  border,
  artist,
  rank,
  rankChange,
  thumbnailUrl,
  title,
}) => {
  return (
    <Container className={className} height={height} border={border}>
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

const Container = styled.div<Pick<AlbumProps, 'height' | 'border'>>`
  height: ${(props) => props.height};
  display: flex;
  padding: 8px;

  ${({ border }) => border && `border: ${border};`}
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

export default Album;
