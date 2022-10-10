import { StyledLink } from 'components/StyledLink';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">
          Register
      </StyledLink>
      <StyledLink to="/login">
          Log In
      </StyledLink>
    </div>
  );
};


