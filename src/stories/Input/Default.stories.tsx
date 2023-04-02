import { ComponentStory, Meta } from '@storybook/react';
import { Input } from '../../component';
export default {
  component: Input.Default,
  // title: getPathForSrcDesignSystem(base, filename),
} as Meta;

export const Playground: ComponentStory<typeof Input.Default> = ({ ...props }) => <Input.Default {...props} data-f="PC-5e77" />;

Playground.args = {
  backgroundColor: '#1E293B',
  borderRadius: '16px',
  textColor: '#9ca3af',
};
