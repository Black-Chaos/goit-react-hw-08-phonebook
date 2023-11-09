import { Wrapper } from "components/partials/wrapper.styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";

export function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
    const navigate = useNavigate()
    return (
      <Wrapper>
        <h1>Welcome to the Contacts App</h1>
        {!isLoggedIn && <button
          className="btn"
          type="button"
          onClick={() => navigate('/account')}
        >
          Log in
        </button>}
      </Wrapper>
    );
}