import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operation';
import { selectUser } from 'redux/auth/selectors';
import { MainTitle } from './userMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name } = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
  };

  return (
    <>
      <MainTitle>Hello, {name}</MainTitle>
      <button className="btn" type="button" onClick={handleClick}>
        Logout
      </button>
    </>
  );
}
