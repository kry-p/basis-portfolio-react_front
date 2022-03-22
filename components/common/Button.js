import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';

export const BorderlessButton = styled(Button)(() => ({
  color: 'gray',
}));

export const BorderedButton = styled(Button)(() => ({
  outline: '1px solid gray',
  borderRadius: '1rem',
  color: 'gray',
}));

export const LogoButton = () => {
  return (
    <IconButton disableRipple href="/">
      <div
        style={{
          fontFamily: 'Montserrat Alternates',
          fontSize: '1.3rem',
          color: 'black',
        }}
      >
        BASIS
      </div>
    </IconButton>
  );
};
