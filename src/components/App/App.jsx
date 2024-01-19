import { Loader } from 'components/Loader/Loader';
import { PrivateRoute } from 'components/ProtectedRoute/PrivateRoute';
import { PublicRoute } from 'components/ProtectedRoute/PublicRoute';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Wrapper } from 'components/partials/wrapper.styled';
import { ProfilePage } from 'pages/profilePage';
import { UpdatePage } from 'pages/updatePage';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operation';
import { selectIsRefreshing } from 'redux/auth/selectors';

const UserPage = lazy(() => import('pages/userPage'));
const ContactsPage = lazy(() => import('pages/contactsPage'));
const HomePage = lazy(() => import('pages/homePage'));
const LoginPage = lazy(() => import('pages/loginPage'));
const RegisterPage = lazy(() => import('pages/registerPage'));

export function App() {
  const isRefresh = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="account"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
          }
        />
        <Route
          path="profile/update"
          element={
            <PrivateRoute redirectTo="/login" component={<UpdatePage />} />
          }
        />
      </Route>
    </Routes>
  );
}