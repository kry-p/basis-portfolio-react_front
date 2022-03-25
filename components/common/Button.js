import router from 'next/router';
import styled from 'styled-components';
import palette from '../../modules/palette';

const Logo = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  padding: 0.5rem 0.5rem;

  font-family: 'OoohBaby-Regular';
  font-weight: 700;
  font-size: 1.75rem;
  color: ${palette.gray[1]};
`;

export const BorderedButton = styled.button`
  background-color: black;
  color: white;
  border: 2px solid ${palette.gray[1]};
  font-family: 'MinSans-Medium';
  font-size: 0.875rem;
  padding: 0.7rem;

  transition: background-color 0.25s;
  user-select: none;

  &:hover {
    background-color: ${palette.gray[8]};
  }
`;

export const IconButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  padding: 0.5rem 0.5rem;
`;

export const BorderlessButton = styled.button`
  background-color: ${palette.gray[9]};
  color: white;
  color: white;
  border: rgba(0, 0, 0, 0);
  font-family: 'MinSans-Medium';
  font-size: 0.875rem;
  padding: 0.7rem;

  transition: background-color 0.25s;
  user-select: none;

  &:hover {
    background-color: ${palette.gray[8]};
  }
`;

const StyledBurger = styled.button`
  position: fixed;
  top: 2.125rem;
  right: 2.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.75rem;
  height: 1.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    right: calc((100vw - 1024px) / 2 + 2rem);
  }

  div {
    width: 1.75rem;
    height: 0.075rem;
    background: ${palette.gray[1]};
    /* background: ${({ open }) => (open ? '#FFFFFF' : '#000000')}; */
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen();
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const LogoButton = () => {
  return (
    <Logo
      onClick={() => {
        router.push('/');
      }}
    >
      BASIS
    </Logo>
  );
};
