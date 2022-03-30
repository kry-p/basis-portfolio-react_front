import styled from 'styled-components';

const ImageContainer = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  filter: brightness(50%);
  background-size: cover;
  background-position: center;

  transition: 0.5s cubic-bezier(0.8, 0, 0.2, 1);
`;

const Image = (url, currentUrl) => {
  return url === currentUrl ? (
    <ImageContainer
      style={{
        background: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  ) : (
    <ImageContainer
      style={{
        background: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0',
      }}
    />
  );
};

export default Image;
