import styled from '@emotion/styled';
import { CSSProperties } from 'react';

export type DefaultProps = Parameters<typeof Default>[0];

export const Default = styled.input<{
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  border?: CSSProperties['border'];
  backgroundColor?: CSSProperties['backgroundColor'];
  borderWidth?: CSSProperties['borderWidth'];
  borderRadius?: CSSProperties['borderRadius'];
  textAlign?: CSSProperties['textAlign'];
  textColor?: CSSProperties['color'];
  focusBorder?: CSSProperties['border'];
  placeholderColor?: CSSProperties['color'];
}>`
  padding: 8px 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;

  ${({ width }) => (width ? `width: ${width};` : `width: 100%;`)}
  ${({ height }) => height && `height: ${height};`}

  ${({ textColor }) => textColor && `color: ${textColor};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ backgroundColor }) => (backgroundColor ? `background-color: ${backgroundColor};` : `background-color: #1E293B;`)}

  border-width: 0;
  ${({ border }) => border && `border: ${border};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
  ${({ borderRadius }) => (borderRadius ? `border-radius: ${borderRadius};` : `border-radius: 16px;`)}

  &::placeholder {
    ${({ placeholderColor }) => placeholderColor && `color: ${placeholderColor};`}
  }
  &:focus {
    ${({ focusBorder }) => focusBorder && `border: ${focusBorder};`}
  }
`;

export { default as Search } from './Search';
