import { Meta, StoryObj } from '@storybook/react';
import App from './App';
import { HttpResponse, http } from 'msw';

const meta = {
  title: 'App',
  component: App,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  parameters: { msw: { handlers: [http.get('*/v2/pokemon', () => new HttpResponse(null, { status: 500 }))] } },
};
