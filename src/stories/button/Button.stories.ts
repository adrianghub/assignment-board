import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from 'src/app/shared/ui/atoms/button/button.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'accent',
    label: 'Button',
  },
};
