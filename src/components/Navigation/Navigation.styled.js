import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
border-bottom: var(--border);
nav {
    width: 100%;
}

ul {
    display: flex;
    justify-content: space-between;
}
`
export const StyledLink = styled(NavLink)`
padding: 8px;
display: block;
font-size: 20px;
color: black;
opacity: .5;

&.active {
    opacity: 1;
}

&:hover {
    color: var(--accentColor);
    opacity: 1;
}
`