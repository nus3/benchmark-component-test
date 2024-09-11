import type { Meta, StoryObj } from "@storybook/react";
import { Form, type FormProps } from "./Form";
import { fn, within, userEvent, expect } from "@storybook/test";
import { waitFor } from "@testing-library/react";

const meta: Meta = {
  component: Form,
};

export default meta;

// satisfiesだとうまく型補完されなかった、かなP
type Story = StoryObj<typeof Form>;

const args: FormProps = {
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    birthDay: "",
    address: "",
    country: "",
    postalCode: "",
    password: "",
    confirmPassword: "",
  },
  onSubmit: fn(),
};

export const Default: Story = {
  args,
  tags: ["no-test"],
};

const playSubmitForm = async (
  canvasElement: HTMLElement,
  args: FormProps,
  index: number,
) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByRole("textbox", { name: "First Name:" }),
    `nus${index}-firstName`,
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: "Last Name:" }),
    `nus${index}-lastName`,
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: "Email:" }),
    `nus${index}-email`,
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: "Birth Day:" }),
    `nus${index}-birthDay`,
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: "Postal Code:" }),
    `nus${index}-postalCode`,
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: "Country:" }),
    `nus${index}-country`,
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: "Address:" }),
    `nus${index}-address`,
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: "Password:" }),
    `nus${index}-password`,
  );
  await userEvent.type(
    canvas.getByRole("textbox", { name: "Confirm Password:" }),
    `nus${index}-confirmPassword`,
  );

  await userEvent.click(canvas.getByRole("button", { name: "Submit" }));

  await waitFor(() =>
    expect(args.onSubmit).toHaveBeenCalledWith({
      firstName: `nus${index}-firstName`,
      lastName: `nus${index}-lastName`,
      email: `nus${index}-email`,
      birthDay: `nus${index}-birthDay`,
      postalCode: `nus${index}-postalCode`,
      country: `nus${index}-country`,
      address: `nus${index}-address`,
      password: `nus${index}-password`,
      confirmPassword: `nus${index}-confirmPassword`,
    }),
  );
};

export const Test1: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 1);
  },
};

export const Test2: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 2);
  },
};

export const Test3: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 3);
  },
};

export const Test4: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 4);
  },
};

export const Test5: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 5);
  },
};

export const Test6: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 6);
  },
};

export const Test7: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 7);
  },
};

export const Test8: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 8);
  },
};

export const Test9: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 9);
  },
};

export const Test10: Story = {
  args,
  play: async ({ args, canvasElement }) => {
    await playSubmitForm(canvasElement, args, 10);
  },
};
