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

describe("Form", () => {
  const TEST_COUNT = 50;

  for (let i = 1; i <= TEST_COUNT; i++) {
    it(`入力された値がsubmit時に渡される: ${i}} 回目`, () => {
      const onSubmitSpy = cy.spy().as("onSubmit");
      cy.mount(<Form initialValues={initialValues} onSubmit={onSubmitSpy} />);

      cy.findByRole("textbox", { name: "First Name:" }).type(
        `nus${i}-firstName`,
      );
      cy.findByRole("textbox", { name: "Last Name:" }).type(`nus${i}-lastName`);
      cy.findByRole("textbox", { name: "Email:" }).type(`nus${i}-email`);
      cy.findByRole("textbox", { name: "Birth Day:" }).type(`nus${i}-birthDay`);
      cy.findByRole("textbox", { name: "Postal Code:" }).type(
        `nus${i}-postalCode`,
      );
      cy.findByRole("textbox", { name: "Country:" }).type(`nus${i}-country`);
      cy.findByRole("textbox", { name: "Address:" }).type(`nus${i}-address`);
      cy.findByRole("textbox", { name: "Password:" }).type(`nus${i}-password`);
      cy.findByRole("textbox", { name: "Confirm Password:" }).type(
        `nus${i}-confirmPassword`,
      );

      cy.findByRole("button", { name: "Submit" }).click();

      cy.get("@onSubmit").should("have.been.calledWith", {
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
