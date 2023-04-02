import { Global, css, ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { lightTheme, darkTheme } from '../src/theme';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css');
      body {
        font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
          'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#EEEEEE',
      },
      {
        name: 'dark',
        value: '#0F172A',
      },
    ],
  },
};

// import { withThemeByDataAttribute } from '@storybook/addon-styling';
// import '../src/tailwind.css';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

// export const decorators = [
//   withThemeByDataAttribute({
//     themes: {
//       light: 'light',
//       dark: 'dark',
//     },
//     defaultTheme: 'dark',
//     attributeName: 'data-mode',
//   }),
// ];
