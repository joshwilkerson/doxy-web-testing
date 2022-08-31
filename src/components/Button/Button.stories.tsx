import React from "react"
import { Story, Meta } from "@storybook/react"

import { Button, ButtonProps } from "./Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    theme: {
      control: "select",
    },
    variant: {
      control: "select",
    },
    size: {
      control: "select",
    },
    disabled: {
      control: "boolean",
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: "primary",
  variant: "filled",
  size: "lg",
  label: "Default Button",
  disabled: false,
}

export const Large = Template.bind({})
Large.args = {
  label: "Large Button",
  size: "lg",
}

export const Small = Template.bind({})
Small.args = {
  label: "Small Button",
  size: "sm",
}
