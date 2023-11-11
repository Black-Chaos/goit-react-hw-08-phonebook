import { Container } from "components/App/App.styled";
import { Header, StyledLink } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "redux/auth/selectors";

export function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const {email} = useSelector(selectUser)

    return <Header>
        <Container>
            <nav>
                <ul>
                    {isLoggedIn ? 
                    <>
                        <li><StyledLink to={'/contacts'}>Contacts</StyledLink></li>
                        <li><StyledLink to={'/account'}>{ email}</StyledLink></li>
                    </> :
                    <>
                        <li><StyledLink to={'/login'}>login</StyledLink></li>
                        <li><StyledLink to={'/register'}>register</StyledLink></li>
                    </>
                    }
                </ul>
            </nav>
        </Container>
    </Header>
}