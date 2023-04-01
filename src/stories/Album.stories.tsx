import { ComponentStory, Meta } from '@storybook/react';
import { Album } from '../component';
export default {
  component: Album,
  // title: getPathForSrcDesignSystem(base, filename),
} as Meta;

export const Playground: ComponentStory<typeof Album> = ({ ...props }) => <Album {...props} data-f="PC-5e77" />;

Playground.args = {
  thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
  height: '50px',
  border: 'solid 1px #e5e5e5',
  rank: 1,
  rankChange: 0,
  rankContainerWidth: '50px',
  title: 'Ditto',
  artist: 'NewJeans',
};
