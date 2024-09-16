/// <reference types="@wdio/globals/types" />
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "@wdio/globals";
import { fn } from "@wdio/browser-runner";
import { Form } from "../../../components/Form/Form";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  birthDay: "",
  address: "",
  country: "",
  postalCode: "",
  password: "",
  confirmPassword: "",
};

describe("Form", () => {
  const TEST_COUNT = 50;

  for (let i = 1; i <= TEST_COUNT; i++) {
    it(`入力フォームに値を入力できる${i}`, async () => {
      const onSubmit = fn();
      const component = render(
        <Form initialValues={initialValues} onSubmit={onSubmit} />,
      );

      await userEvent.type(
        screen.getByRole("textbox", { name: "First Name:" }),
        `nus${i}-firstName`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Last Name:" }),
        `nus${i}-lastName`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Email:" }),
        `nus${i}-email`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Birth Day:" }),
        `nus${i}-birthDay`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Postal Code:" }),
        `nus${i}-postalCode`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Country:" }),
        `nus${i}-country`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Address:" }),
        `nus${i}-address`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Password:" }),
        `nus${i}-password`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Confirm Password:" }),
        `nus${i}-confirmPassword`,
      );

      await userEvent.click(screen.getByRole("button", { name: "Submit" }));

      expect(onSubmit).toHaveBeenCalledWith({
        firstName: `nus${i}-firstName`,
        lastName: `nus${i}-lastName`,
        email: `nus${i}-email`,
        birthDay: `nus${i}-birthDay`,
        postalCode: `nus${i}-postalCode`,
        country: `nus${i}-country`,
        address: `nus${i}-address`,
        password: `nus${i}-password`,
        confirmPassword: `nus${i}-confirmPassword`,
      });

      component.unmount();
    });
  }
});
