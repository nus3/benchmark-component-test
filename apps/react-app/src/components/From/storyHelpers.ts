import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import type { FormProps } from "./Form";

export const args: FormProps = {
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

export const playSubmitForm = async (
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
