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

describe("<Form />", () => {
  it("renders", () => {
    const onSubmitSpy = cy.spy().as("onSubmit");
    cy.mount(<Form initialValues={initialValues} onSubmit={onSubmitSpy} />);
  });
});
