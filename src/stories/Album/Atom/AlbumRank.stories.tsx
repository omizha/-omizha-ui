import { ComponentStory, Meta } from '@storybook/react';
import { Album } from '../../../component';
export default {
  component: Album.Atom.AlbumRank,
  // title: getPathForSrcDesignSystem(base, filename),
} as Meta;

export const Playground: ComponentStory<typeof Album.Atom.AlbumRank> = ({ ...props }) => (
  <Album.Atom.AlbumRank {...props} data-f="PC-5e77" />
);

Playground.args = {
  thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
  height: '50px',
  rank: 1,
  rankChange: 0,
  rankContainerWidth: '50px',
  title: 'Ditto',
  artist: 'NewJeans',
  textColor: '#e5e5e5',
  backgroundColor: '#1E293B',
};
