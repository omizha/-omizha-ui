import { ComponentStory, Meta } from '@storybook/react';
import { Sidebar } from '../component';
export default {
  component: Sidebar,
  // title: getPathForSrcDesignSystem(base, filename),
} as Meta;

export const Playground: ComponentStory<typeof Sidebar> = ({ ...props }) => <Sidebar {...props} data-f="PC-5e77" />;

Playground.args = {
  width: '150px',
  height: '400px',
  backgroundColor: '#000000',
};
