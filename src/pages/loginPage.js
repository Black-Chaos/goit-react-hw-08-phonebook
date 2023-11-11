import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operation';
import { object, string } from 'yup';
import { ErrorField, StyledButton, StyledField, StyledForm } from './stylePages/form.styled';
import { Wrapper } from 'components/partials/wrapper.styled';
import { PageBg } from './stylePages/userPage.style';
import { BackButton } from 'components/BackButton/BackButton';

const validationSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export default function LoginPage() {
  const dispatch = useDispatch()
    const navigate = useNavigate();

  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      await dispatch(logIn(values))
      formik.resetForm()
      navigate('/account', {replace: true})
    },
  });
  
  return (
    <PageBg>
      <Wrapper>
        <BackButton/>
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
      </Wrapper>
    </PageBg>
  );
}