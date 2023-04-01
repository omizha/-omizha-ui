import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const { Global } = require('@emotion/react');

const GlobalStyles = () => <Global />;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

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
