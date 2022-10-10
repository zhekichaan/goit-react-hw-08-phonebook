import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box } from '@mui/material';
import { UserMessage } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <UserMessage>Welcome, {user.name}</UserMessage>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Box>
  );
};


