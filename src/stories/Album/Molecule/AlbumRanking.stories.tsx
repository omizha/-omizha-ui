import { ComponentStory, Meta } from '@storybook/react';
import { Album } from '../../../component';
export default {
  component: Album.Molecule.AlbumRanking,
  // title: getPathForSrcDesignSystem(base, filename),
} as Meta;

export const Playground: ComponentStory<typeof Album.Molecule.AlbumRanking> = ({ ...props }) => (
  <Album.Molecule.AlbumRanking {...props} data-f="PC-5e77" />
);

Playground.args = {
  width: '100%',
  height: '300px',
  backgroundColor: '#eeeeee',
  title: {
    text: 'TOP100',
  },
  titleRightComponent: <div>더보기</div>,
  items: [
    {
      id: '1',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      rank: 1,
      rankChange: 0,
      title: 'Ditto',
      artist: 'NewJeans',
    },
    {
      id: '2',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      rank: 2,
      rankChange: 0,
      title: 'OMG',
      artist: 'NewJeans',
    },
    {
      id: '3',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      rank: 3,
      rankChange: 0,
      title: 'Hype boy',
      artist: 'NewJeans',
    },
    {
      id: '4',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      rank: 4,
      rankChange: 0,
      title: 'Teddy Bear',
      artist: 'STAYC(스테이씨)',
    },
    {
      id: '5',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      rank: 5,
      rankChange: 1,
      title: 'Dynamite',
      artist: '방탄소년단',
    },
    {
      id: '6',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      rank: 6,
      rankChange: -1,
      title: 'Dynamite',
      artist: '방탄소년단',
    },
    {
      id: '7',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      rank: 7,
      rankChange: -1,
      title: 'Dynamite',
      artist: '방탄소년단',
    },
    {
      id: '8',
      thumbnailUrl: 'https://cataas.com/cat/says/hello%20world!',
      rank: 8,
      rankChange: -1,
      title: 'Dynamite',
      artist: '방탄소년단',
    },
  ],
};
