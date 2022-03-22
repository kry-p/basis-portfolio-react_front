import Image from 'next/image';

import IconButton from '@mui/material/IconButton';

const LogoButton = () => {
  return (
    <IconButton disableRipple href="/">
      <Image src="/resources/logo.png" width="27" height="31.2" />
      <div
        style={{
          fontFamily: 'Montserrat Alternates',
          paddingLeft: '0.5rem',
          fontSize: '1.3rem',
          color: 'black',
        }}
      >
        Convert-it!
      </div>
    </IconButton>
  );
};

export default LogoButton;
