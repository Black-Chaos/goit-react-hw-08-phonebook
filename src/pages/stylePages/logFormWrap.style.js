import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FormWrap = styled.div`
margin-inline: auto;
width: 300px;

.nav-wrap {
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
}
`;

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 800;
  opacity: 0.5;
  text-transform: uppercase;

  &.active {
    opacity: 1;
  }

  &:hover {
    transition: all 0.3s cubic-bezier(0.6, 0, 0.4, 1);
    opacity: 1;
  }
`;