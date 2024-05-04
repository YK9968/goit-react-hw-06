import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd, validation, values }) {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.formContainer}>
        <div className={css.formContainerItem}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.inputFormName}
            type="text"
            name="name"
            id={nameId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formContainerItem}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.inputFormNumber}
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
