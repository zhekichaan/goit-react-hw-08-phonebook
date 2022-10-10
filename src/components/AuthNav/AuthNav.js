import { NavLink } from 'react-router-dom';
import { StyledLink } from 'components/StyledLink';

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


