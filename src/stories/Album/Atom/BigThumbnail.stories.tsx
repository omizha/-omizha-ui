import { ComponentStory, Meta } from '@storybook/react';
import { Album } from '../../../component';
export default {
  component: Album.Atom.BigThumbnail,
  // title: getPathForSrcDesignSystem(base, filename),
} as Meta;

export const Playground: ComponentStory<typeof Album.Atom.BigThumbnail> = ({ ...props }) => (
  <Album.Atom.BigThumbnail {...props} data-f="PC-5e77" />
);

Playground.args = {
  thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
  title: 'Ditto',
  artist: 'NewJeans',
  thumbnailWidth: '200px',
  thumbnailHeight: '200px',
};
