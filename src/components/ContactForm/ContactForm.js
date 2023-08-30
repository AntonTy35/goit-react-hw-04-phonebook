import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import { Label, ButtonSubmit } from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required('Required!')
    .min(2, 'Too Short!')
    .max(20, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(20, 'Too Long!'),
});

const FormStyled = styled(Form)`
  width: 300px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <FormStyled>
        <Label>
          <b>Name</b>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          <b>Number</b>
          <Field type="number" name="number" />
          <ErrorMessage name="number" component="div" />
        </Label>

        <ButtonSubmit type="submit">
          <b>Add contact</b>
        </ButtonSubmit>
      </FormStyled>
    </Formik>
  );
};
