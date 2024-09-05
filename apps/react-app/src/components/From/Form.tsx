import { type FormEvent, useCallback, useState, type FC } from "react";
import styles from "./Form.module.css";

type FormSchema = {
  firstName: string;
  lastName: string;
  email: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
};

type FormProps = {
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
      if (values) {
        onSubmit(values);
      }
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
            type="email"
            value={values?.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="birthYear">Birth Year:</label>
          <input
            className={styles.input}
            id="birthYear"
            name="birthYear"
            type="text"
            value={values?.birthYear}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="birthMonth">Birth Month:</label>
          <input
            className={styles.input}
            id="birthMonth"
            name="birthMonth"
            type="text"
            value={values?.birthMonth}
            onChange={handleChange}
          />
        </div>
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

      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};
