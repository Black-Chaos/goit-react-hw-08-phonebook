import { Wrapper } from 'components/partials/wrapper.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { selectUser } from 'redux/auth/selectors';
import { NameTitle } from './userMenu.styled';
import { useNavigate } from 'react-router-dom';
import { BackButton } from 'components/BackButton/BackButton';

export function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name } = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <BackButton/>
      <NameTitle>Welcome, {name}</NameTitle>
      <button className="btn" type="button" onClick={handleClick}>
        Logout
      </button>
    </Wrapper>
  );
}
