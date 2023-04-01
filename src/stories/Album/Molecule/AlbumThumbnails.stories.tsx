import { ComponentStory, Meta } from '@storybook/react';
import { Album } from '../../../component';
export default {
  component: Album.Molecule.AlbumThumbnails,
  // title: getPathForSrcDesignSystem(base, filename),
} as Meta;

export const Playground: ComponentStory<typeof Album.Molecule.AlbumThumbnails> = ({ ...props }) => (
  <Album.Molecule.AlbumThumbnails {...props} data-f="PC-5e77" />
);

Playground.args = {
  width: '100%',
  height: '300px',
  thumbnailWidth: '200px',
  thumbnailHeight: '200px',
  title: {
    text: 'TOP100',
  },
  titleRightComponent: <div>더보기</div>,
  items: [
    {
      id: '1',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      title: 'Ditto',
      artist: 'NewJeans',
    },
    {
      id: '2',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      title: 'OMG',
      artist: 'NewJeans',
    },
    {
      id: '3',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      title: 'Hype boy',
      artist: 'NewJeans',
    },
    {
      id: '4',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      title: 'Teddy Bear',
      artist: 'STAYC(스테이씨)',
    },
  ],
};
