import { UserMenu } from 'components/UserMenu/UserMenu';
import { Wrapper } from 'components/partials/wrapper.styled';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { FormWrap, StyledLink } from './stylePages/logFormWrap.style';
import { PageBg } from './stylePages/userPage.style';
import { BackButton } from 'components/BackButton/BackButton';


export function AuthPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <PageBg>
      {isLoggedIn ? <UserMenu/> :
        <Wrapper>
          <BackButton/>
          <FormWrap>
            <div className='nav-wrap'>
              <StyledLink to={'/account/login'}>Log in</StyledLink>
              <StyledLink to={'/account/register'}>Sign up</StyledLink>
            </div>
          <Outlet/>
          </FormWrap>
        </Wrapper>}
    </PageBg>
  );
}