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
  backgroundColor: '#EEEEEE',
  padding: '16px',
  items: [
    {
      text: '멜론홈',
    },
    {
      text: '멜론차트',
    },
    {
      text: '최신음악',
    },
    {
      text: '장르음악',
    },
    {
      text: '멜론DJ',
    },
    {
      text: '멜론TV',
    },
    {
      text: '어학',
    },
    {
      text: '마이뮤직',
    },
    {
      text: '구매목록',
    },
    {
      text: '보관함',
    },
  ],
};
