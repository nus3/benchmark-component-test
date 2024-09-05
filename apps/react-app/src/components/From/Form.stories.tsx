import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { fn } from "@storybook/test";

const meta: Meta = {
  component: Form,
};

export default meta;

// satisfiesだとうまく型補完されなかった、かなP
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
    },
    onSubmit: fn(),
  },
};
