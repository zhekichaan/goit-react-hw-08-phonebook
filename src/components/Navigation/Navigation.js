import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styled from '@emotion/styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/home">
          Home
        </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
            Contacts
        </StyledLink>
      )}
    </nav>
  );
};


export const StyledLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;

    &:hover {
        color: #e84a5f;
    }
`
