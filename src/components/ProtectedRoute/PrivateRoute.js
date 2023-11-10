import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export function PrivateRoute({ component: Component, redirectTo = '/'}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefreshing);
  const shouldBeRedirect = !isLoggedIn && !isRefresh;

  return shouldBeRedirect ? <Navigate to={redirectTo} /> : Component
}