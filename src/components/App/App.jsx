import { Loader } from 'components/Loader/Loader';
import { PrivateRoute } from 'components/ProtectedRoute/PrivateRoute';
import { PublicRoute } from 'components/ProtectedRoute/PublicRoute';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Wrapper } from 'components/partials/wrapper.styled';
// import { AuthPage, ContactsPage, HomePage, LoginPage, RegisterPage } from 'pages';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operation';
import { selectIsRefreshing } from 'redux/auth/selectors';

const UserPage = lazy(() => import('pages/userPage'))
const ContactsPage = lazy(() => import('pages/contactsPage'));
const HomePage = lazy(() => import('pages/homePage'));
const LoginPage = lazy(() => import('pages/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage'));

export function App() {
  const isRefresh = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  return isRefresh ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="account" element={<UserPage />}>
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="account" component={<LoginPage />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="account" component={<RegisterPage />} />
            }
          />
        </Route>
        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="/account/login"
              component={<ContactsPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
}