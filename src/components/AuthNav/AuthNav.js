import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <StyledLink>
          Register
        </StyledLink>
      </NavLink>
      <NavLink to="/login">
        <StyledLink>
          Log In
        </StyledLink>
      </NavLink>
    </div>
  );
};

export const StyledLink = styled.div`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;

    &:hover {
        color: #e84a5f;
    }
`
