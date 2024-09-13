import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../../../src/components/Form/Form";

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

const TEST_COUNT = 50;

// indexというプロパティを持つオブジェクトがある50個の配列を作る
const array = Array.from({ length: TEST_COUNT }, (_, i) => ({ index: i + 1 }));

describe("Form", () => {
  // Formの入力値通りの値がonSubmitの引数として返ってきてることを50回実行したい
  test.each(array)(
    "入力された値がsubmit時に渡される: $index 回目",
    async ({ index }) => {
      const onSubmit = vi.fn();
      const component = render(
        <Form initialValues={initialValues} onSubmit={onSubmit} />,
      );

      await userEvent.type(
        screen.getByRole("textbox", { name: "First Name:" }),
        `nus${index}-firstName`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Last Name:" }),
        `nus${index}-lastName`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Email:" }),
        `nus${index}-email`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Birth Day:" }),
        `nus${index}-birthDay`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Postal Code:" }),
        `nus${index}-postalCode`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Country:" }),
        `nus${index}-country`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Address:" }),
        `nus${index}-address`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Password:" }),
        `nus${index}-password`,
      );
      await userEvent.type(
        screen.getByRole("textbox", { name: "Confirm Password:" }),
        `nus${index}-confirmPassword`,
      );

      await userEvent.click(screen.getByRole("button", { name: "Submit" }));

      expect(onSubmit).toHaveBeenCalledWith({
        firstName: `nus${index}-firstName`,
        lastName: `nus${index}-lastName`,
        email: `nus${index}-email`,
        birthDay: `nus${index}-birthDay`,
        postalCode: `nus${index}-postalCode`,
        country: `nus${index}-country`,
        address: `nus${index}-address`,
        password: `nus${index}-password`,
        confirmPassword: `nus${index}-confirmPassword`,
      });

      component.unmount();
    },
  );
});
