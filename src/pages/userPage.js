import { UserMenu } from 'components/UserMenu/UserMenu';
import { Wrapper } from 'components/partials/wrapper.styled';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { FormWrap, StyledLink } from './stylePages/logFormWrap.style';
import { PageBg } from './stylePages/userPage.style';
import { BackButton } from 'components/BackButton/BackButton';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export default function UserPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <PageBg>
      <Wrapper>
        <BackButton />
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <FormWrap>
            <div className="nav-wrap">
              <StyledLink to={'login'}>Log in</StyledLink>
              <StyledLink to={'register'}>Sign up</StyledLink>
            </div>
            <Suspense
              fallback={
                <Wrapper>
                  <Loader />
                </Wrapper>
              }
            >
              <Outlet />
            </Suspense>
          </FormWrap>
        )}
      </Wrapper>
    </PageBg>
  );
}
