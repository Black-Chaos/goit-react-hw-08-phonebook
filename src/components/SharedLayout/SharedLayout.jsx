import { Loader } from "components/Loader/Loader";
import { Navigation } from "components/Navigation/Navigation";
import { Wrapper } from "components/partials/wrapper.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export function SharedLayout() {
    
    return (
      <>
        <Navigation />
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