import { Meta, StoryObj } from '@storybook/react';
import Detail from './Detail';
import { HttpResponse, http } from 'msw';

const meta = {
  title: 'Detail',
  component: Detail,
  parameters: {
    reactRouter: {
      routeParams: { id: '1' },
      routePath: '/pokemon/:id',
    },
  },
  argTypes: {},
} satisfies Meta<typeof Detail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  parameters: {
    msw: { handlers: [http.get('*/v2/pokemon/:id', () => new HttpResponse(null, { status: 500 }))] },
  },
};
