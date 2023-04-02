import { ComponentStory, Meta } from '@storybook/react';
import { Header } from '../component';
export default {
  component: Header,
  // title: getPathForSrcDesignSystem(base, filename),
} as Meta;

export const Playground: ComponentStory<typeof Header> = ({ ...props }) => <Header {...props} data-f="PC-5e77" />;

Playground.args = {
  width: '100%',
  height: '100px',
  background: '#1E293B',
};
