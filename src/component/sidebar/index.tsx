import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

interface SidebarProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  backgroundColor: CSSProperties['backgroundColor'];
  items: {
    text: string;
    link?: string;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({
  width,
  height,
  backgroundColor,
  items = [
    {
      text: '멜론홈',
    },
    {
      text: '멜론차트',
    },
    {
      text: '최신음악',
    },
    {
      text: '장르음악',
    },
    {
      text: '멜론DJ',
    },
    {
      text: '멜론TV',
    },
    {
      text: '어학',
    },
    {
      text: '마이뮤직',
    },
    {
      text: '구매목록',
    },
    {
      text: '보관함',
    },
  ],
}) => {
  return (
    <Container width={width} height={height} backgroundColor={backgroundColor}>
      {/* <Icon /> */}
      <TextContainer>
        {items.map((item) => (
          <div>{item.text}</div>
        ))}
      </TextContainer>
    </Container>
  );
};

const Container = styled.div<{
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  backgroundColor: CSSProperties['backgroundColor'];
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
`;

const TextContainer = styled.div``;

export default Sidebar;
