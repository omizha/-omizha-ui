import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

interface SidebarProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  topComponent?: React.ReactNode;
  textDefaultColor: CSSProperties['color'];
  textHoverColor: CSSProperties['color'];
  textActiveColor: CSSProperties['color'];
  selectedText: string;
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

const Sidebar: React.FC<SidebarProps> = ({
  topComponent = <></>,
  selectedText,
  textActiveColor,
  textDefaultColor,
  textHoverColor,
  width,
  height,
  backgroundColor,
  padding,
  className,
  items,
}) => {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      padding={padding}
      textDefaultColor={textDefaultColor}
      backgroundColor={backgroundColor}
    >
      {topComponent}
      <TextUl>
        {items.map((item) => (
          <TextLi
            key={item.text}
            marginBottom={padding}
            isActive={item.text === selectedText}
            textActiveColor={textActiveColor}
            textHoverColor={textHoverColor}
          >
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
  textDefaultColor: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  padding: CSSProperties['padding'];
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}

  box-sizing: border-box;
  color: ${(props) => props.textDefaultColor};
`;

const TextUl = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0px;
`;

const TextLi = styled.li<{
  marginBottom: CSSProperties['marginBottom'];
  textActiveColor: CSSProperties['color'];
  textHoverColor: CSSProperties['color'];
  isActive: boolean;
}>`
  margin-bottom: ${(props) => props.marginBottom};

  &:hover {
    color: ${(props) => props.textHoverColor};
  }

  ${(props) => props.isActive && `color: ${props.textActiveColor};`}
`;

export default Sidebar;
