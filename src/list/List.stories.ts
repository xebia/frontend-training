import { Meta, StoryObj } from '@storybook/react';
import List from './List';
import { HttpResponse, http } from 'msw';

const meta = {
  title: 'List',
  component: List,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  parameters: { msw: { handlers: [http.get('*/v2/pokemon', () => new HttpResponse(null, { status: 500 }))] } },
};
