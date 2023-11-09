import { Loader } from 'components/Loader/Loader';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Wrapper } from 'components/partials/wrapper.styled';
import { AuthPage, ContactsPage, HomePage, LoginPage, RegisterPage } from 'pages';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operation';
import { selectIsRefreshing } from 'redux/auth/selectors';

export function App() {
  const isRefresh = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  return (
    isRefresh ? <Wrapper><Loader/></Wrapper> : <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="account" element={<AuthPage/>}>
          <Route path="login" element={<LoginPage/>} />
          <Route path="register" element={<RegisterPage/>} />
        </Route>
        <Route path="contacts" element={<ContactsPage/>} />
      </Route>
    </Routes>
  );
}