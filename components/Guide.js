import styled, { keyframes } from 'styled-components';
import palette from '../modules/palette';
import { Arrow, ArrowButton } from './button/Arrow';

const wave = keyframes`
  0% {
    bottom: 7rem;
  }
  50% {
    bottom: 6rem;
  }
  100% {
    bottom: 7rem;
  }
`;

const StyledGuide = styled.div`
  position: absolute;

  bottom: 3rem;

  width: 100vw;
  height: 4rem;
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  z-index: 1;

  animation: ${wave} 1.5s infinite ease-in-out;
  transition: 0.5s cubic-bezier(0.8, 0, 0.2, 1);
`;

const WaveArrow = styled.div`
  display: flex;
  justify-content: center;
`;

const Guide = () => (
  <StyledGuide>
    <div style={{ color: `${palette.gray[3]}` }}>
      아래로 스크롤하여 확인하기
    </div>
    <WaveArrow>
      <ArrowButton style={{ transform: 'rotate(-45deg)' }}>
        <Arrow>
          <div />
          <div />
        </Arrow>
      </ArrowButton>
    </WaveArrow>
  </StyledGuide>
);

export default Guide;
