import { render } from "safetest/react";
import { describe, test, expect, browserMock } from "safetest/vitest";
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
    test(`入力された値がsubmit時に渡される: ${i} 回目`, async () => {
      const onSubmit = browserMock.fn();
      const { page } = await render(
        <Form initialValues={initialValues} onSubmit={onSubmit} />,
      );

      await page
        .getByRole("textbox", { name: "First Name:" })
        .fill(`nus${i}-firstName`);
      await page
        .getByRole("textbox", { name: "Last Name:" })
        .fill(`nus${i}-lastName`);
      await page.getByRole("textbox", { name: "Email:" }).fill(`nus${i}-email`);
      await page
        .getByRole("textbox", { name: "Birth Day:" })
        .fill(`nus${i}-birthDay`);
      await page
        .getByRole("textbox", { name: "Postal Code:" })
        .fill(`nus${i}-postalCode`);
      await page
        .getByRole("textbox", { name: "Country:" })
        .fill(`nus${i}-country`);
      await page
        .getByRole("textbox", { name: "Address:" })
        .fill(`nus${i}-address`);
      await page
        .getByLabel("Password:", { exact: true })
        .fill(`nus${i}-password`);
      await page
        .getByRole("textbox", { name: "Confirm Password:" })
        .fill(`nus${i}-confirmPassword`);

      await page.getByRole("button", { name: "Submit" }).click();

      expect(await onSubmit).toHaveBeenCalledWith({
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
    });
  }
});
