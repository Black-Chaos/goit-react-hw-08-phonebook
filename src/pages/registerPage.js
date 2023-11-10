import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'redux/auth/operation';
import { object, string } from 'yup';
import {
  ErrorField,
  StyledButton,
  StyledField,
  StyledForm,
} from './stylePages/form.styled';

const validationSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
});

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(signUp(values));
      navigate('/account', { replace: true });
    },
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledField
          name="name"
          placeholder="Name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorField>{formik.errors.name}</ErrorField>
        ) : null}
        <StyledField
          name="email"
          placeholder="Email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorField>{formik.errors.email}</ErrorField>
        ) : null}
        <StyledField
          name="password"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorField>{formik.errors.password}</ErrorField>
        ) : null}
        <StyledButton>Sign in</StyledButton>
      </StyledForm>
    </>
   
  );
}
