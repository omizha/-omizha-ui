import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

interface SidebarProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  backgroundColor?: CSSProperties['backgroundColor'];
  padding: CSSProperties['padding'];
  items: {
    /**
     * 텍스트 (Unique)
     */
    text: string;
    link?: string;
  }[];
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ width, height, backgroundColor, padding, className, items }) => {
  return (
    <Container className={className} width={width} height={height} padding={padding} backgroundColor={backgroundColor}>
      {/* <Icon /> */}
      <TextUl>
        {items.map((item) => (
          <TextLi key={item.text} marginBottom={padding}>
            <a href={item.link}>{item.text}</a>
          </TextLi>
        ))}
      </TextUl>
    </Container>
  );
};

const Container = styled.div<{
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  backgroundColor?: CSSProperties['backgroundColor'];
  padding: CSSProperties['padding'];
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}

  box-sizing: border-box;
`;

const TextUl = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0px;
`;

const TextLi = styled.li<{
  marginBottom: CSSProperties['marginBottom'];
}>`
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Sidebar;
