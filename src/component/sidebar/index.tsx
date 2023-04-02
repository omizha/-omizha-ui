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
    <Container className={className} width={width} height={height} padding={padding} backgroundColor={backgroundColor}>
      {topComponent}
      <TextUl>
        {items.map((item) => (
          <TextLi key={item.text} marginBottom={padding}>
            <TextHref
              href={item.link}
              isActive={item.text === selectedText}
              textDefaultColor={textDefaultColor}
              textActiveColor={textActiveColor}
              textHoverColor={textHoverColor}
            >
              {item.text}
            </TextHref>
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

const TextHref = styled.a<{
  textDefaultColor: CSSProperties['color'];
  textActiveColor: CSSProperties['color'];
  textHoverColor: CSSProperties['color'];
  isActive: boolean;
}>`
  color: ${(props) => props.textDefaultColor};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.textHoverColor};
  }

  ${(props) => props.isActive && `color: ${props.textActiveColor};`}
`;

export default Sidebar;
