import { Meta, StoryObj } from '@storybook/react';
import App from './App';

const meta = {
  title: 'App',
  component: App,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
