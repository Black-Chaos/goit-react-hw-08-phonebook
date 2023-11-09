import { Container } from "components/App/App.styled";
import { Header, StyledLink } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";

export function Navigation() {
    const {email} = useSelector(selectUser)

    return <Header>
        <Container>
            <nav>
                <ul>
                    <li><StyledLink to={'/contacts'}>Contacts</StyledLink></li>
                    <li><StyledLink to={'/account'}>{ email}</StyledLink></li>
                </ul>
            </nav>
        </Container>
    </Header>
}