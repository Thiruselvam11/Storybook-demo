import Button from "./Button"
import React from "react"


export default {
  title: 'Theme-components/Button',
  component: Button,
};

export const Primary = () => <Button variant = "primary">Primary</Button>
export const Secondary = () => <Button variant = "secondary">Secondary</Button>
export const Success = () => <Button variant = "success">Success</Button>
export const Danger = () => <Button variant = "danger">Danger</Button>
export const Rounded = () => <Button variant = "rounded">Rounded</Button>
export const HoverButton = () => <Button variant = "hover">HoverButton</Button>





