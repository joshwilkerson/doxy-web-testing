import React from "react";
import { Josh, JoshProps } from "../components/Josh/";

export default {
  title: 'Josh',
  component: Josh,
  argTypes: {
    theme: {
      options: ["primary", "destroy", "alert"],
      control: { type: 'select'}
    },
    variant: {
      options: ['filled', 'outlined', "naked"],
      control: { type: 'select'}
    },
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'select'}
    },
    disabled: {
      option: ["true", "false"],
      control: { type: "boolean" }
    }
  }
};

const Template = (args) => {
  return (
    <Josh {...args} onClick={() => alert("hey!")}/>
  )
}

export const Button = Template.bind({});
Button.args ={
  label: "Button",
  theme: "primary",
  size: "lg"
}