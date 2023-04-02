import styled from '@emotion/styled';
import { CSSProperties } from 'react';

export type DefaultProps = Parameters<typeof Default>[0];

export const Default = styled.input<{
  border?: CSSProperties['border'];
  backgroundColor?: CSSProperties['backgroundColor'];
  borderWidth?: CSSProperties['borderWidth'];
  borderRadius?: CSSProperties['borderRadius'];
  textAlign?: CSSProperties['textAlign'];
  textColor?: CSSProperties['color'];
  focusBorder?: CSSProperties['border'];
  placeholderColor?: CSSProperties['color'];
}>`
  width: 100%;
  padding: 8px 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;

  ${({ textColor }) => textColor && `color: ${textColor};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}

  ${({ borderWidth }) => !borderWidth && `border-width: 0px;`}
  ${({ border }) => border && `border: ${border};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}

  &::placeholder {
    ${({ placeholderColor }) => placeholderColor && `color: ${placeholderColor};`}
  }
  &:focus {
    ${({ focusBorder }) => focusBorder && `border: ${focusBorder};`}
  }
`;

export { default as Search } from './Search';
