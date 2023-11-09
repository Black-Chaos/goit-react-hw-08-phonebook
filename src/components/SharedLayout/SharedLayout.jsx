import { Navigation } from "components/Navigation/Navigation";
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
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </>
    );
}