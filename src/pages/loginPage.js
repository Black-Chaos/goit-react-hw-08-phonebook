import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operation';
import { object, string } from 'yup';
import { ErrorField, StyledButton, StyledField, StyledForm } from './stylePages/form.styled';

const validationSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export function LoginPage() {
  const dispatch = useDispatch()
    const navigate = useNavigate();

  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(logIn(values))
      formik.resetForm()
      navigate('/account', {replace: true})
    },
  });
  
  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
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
        <StyledButton type="submit">log in</StyledButton>
      </StyledForm>
    </>
  );
}