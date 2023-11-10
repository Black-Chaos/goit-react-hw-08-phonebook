import { Loader } from "components/Loader/Loader";
import { Navigation } from "components/Navigation/Navigation";
import { Wrapper } from "components/partials/wrapper.styled";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";

export function SharedLayout() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    
    return (
      <>
        {isLoggedIn && <Navigation />}
        <main>
          <Suspense
            fallback={
              <Wrapper>
                <Loader />
              </Wrapper>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </>
    );
}