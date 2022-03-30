import styled from 'styled-components';
import TypeWriterEffect from 'typewriter-effect';
import palette from '../../modules/palette';

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  top: calc(50vh - 0.875rem);
  z-index: 1;

  font-size: 1.75rem;
  letter-spacing: -0.1rem;
  color: ${palette.gray[5]};

  @media (min-width: 324px) {
    top: calc(50vh - 1rem);
    font-size: 2rem;
  }

  @media (min-width: 448px) {
    top: calc(50vh - 1.25rem);
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    top: calc(50vh - 2rem);
    font-size: 4rem;
  }
`;

const onInit = (typewriter) => {
  typewriter
    .typeString('안녕하세요! 정재훈입니다.')
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(2000)
    .typeString('프론트엔드 개발자입니다.')
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(2000)
    .typeString('사진도 찍고 있습니다.')
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(2000)
    .start();
};

const Typewriter = () => (
  <TextWrapper>
    <TypeWriterEffect
      onInit={(typewriter) => onInit(typewriter)}
      options={{
        loop: true,
      }}
    />
  </TextWrapper>
);

export default Typewriter;
