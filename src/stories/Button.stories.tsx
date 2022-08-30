import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    variant: { 
      control: 'select'
    },
    size: {
      control: "select"
    },
    disabled: {
      control: "boolean"
    }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  variant: 'filled',
  size: 'lg',
  disabled: false
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'sm',
};