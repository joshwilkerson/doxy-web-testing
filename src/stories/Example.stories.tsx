import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Example, ExampleProps } from '../components/Example';

export default {
  title: 'Example/ButtonTest',
  component: Example,
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

const Template: Story<ExampleProps> = (args) => <Example {...args} />;

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