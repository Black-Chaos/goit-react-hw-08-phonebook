import { MainTitle } from "components/UserMenu/userMenu.styled";
import { Wrapper } from "components/partials/wrapper.styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
    const navigate = useNavigate()
    return (
      <Wrapper>
        <MainTitle>Welcome to the Contacts App</MainTitle>
        {!isLoggedIn && <button
          className="btn"
          type="button"
          onClick={() => navigate('/account/login')}
        >
          Log in
        </button>}
      </Wrapper>
    );
}