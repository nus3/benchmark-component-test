import { type FormEvent, useCallback, useState, type FC } from "react";
import styles from "./Form.module.css";

type FormSchema = {
  firstName: string;
  lastName: string;
  email: string;
  birthDay: string;
  address: string;
  postalCode: string;
  country: string;
  password: string;
  confirmPassword: string;
};

export type FormProps = {
  initialValues: FormSchema;
  onSubmit: (values: FormSchema) => void;
};

export const Form: FC<FormProps> = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    // nameがFormSchemaのkeyの型としてキャストする
    const hoge = name as keyof FormSchema;

    setValues({
      ...values,
      [hoge]: value,
    });
  };

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      onSubmit(values);
    },
    [values, onSubmit],
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName">First Name:</label>
          <input
            className={styles.input}
            id="firstName"
            name="firstName"
            type="text"
            value={values?.firstName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            className={styles.input}
            id="lastName"
            name="lastName"
            type="text"
            value={values?.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="text"
            value={values?.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="birthDay">Birth Day:</label>
          <input
            className={styles.input}
            id="birthDay"
            name="birthDay"
            type="text"
            value={values?.birthDay}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            className={styles.input}
            id="postalCode"
            name="postalCode"
            type="text"
            value={values?.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="country">Country:</label>
          <input
            className={styles.input}
            id="country"
            name="country"
            type="text"
            value={values?.country}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="address">Address:</label>
          <input
            className={styles.input}
            id="address"
            name="address"
            type="text"
            value={values?.address}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="password">Password:</label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="text"
            value={values?.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className={styles.input}
            id="confirmPassword"
            name="confirmPassword"
            type="text"
            value={values?.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};
