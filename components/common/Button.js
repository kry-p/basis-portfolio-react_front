import styled from 'styled-components';
import palette from '../../modules/palette';

const Logo = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  padding: 0.5rem 0.5rem;
`;

export const BorderedButton = styled.button`
  background-color: white;
  border-radius: 0.375rem;
  border: 1px solid ${palette.gray[8]};
  font-size: 0.875rem;
  padding: 0.7rem;

  transition: background-color 0.25s;
  user-select: none;

  &:hover {
    background-color: ${palette.gray[2]};
  }
`;

export const IconButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  padding: 0.5rem 0.5rem;
`;

export const BorderlessButton = styled.button`
  background-color: ${palette.gray[8]};
  color: white;
  border-radius: 0.375rem;
  border: rgba(0, 0, 0, 0);
  font-size: 0.875rem;
  padding: 0.7rem;

  transition: background-color 0.25s;
  user-select: none;

  &:hover {
    background-color: ${palette.gray[7]};
  }
`;

export const LogoButton = () => {
  return (
    <Logo
      onClick={() => {
        console.log('clicked');
      }}
    >
      <div
        style={{
          fontFamily: 'Montserrat Alternates',
          fontSize: '1.3rem',
          color: 'black',
        }}
      >
        BASIS
      </div>
    </Logo>
  );
};
