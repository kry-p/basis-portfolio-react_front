import styled from 'styled-components';

const ImageBlock = styled.div`
  position: absolute;
  top: 0;

  width: 100vw;
  height: 100vh;

  filter: brightness(80%) contrast(80%) grayscale(100%);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  transition: 0.5s cubic-bezier(0.8, 0, 0.2, 1);
`;

const Image = (url, currentUrl) => {
  return url === currentUrl ? (
    <ImageBlock
      style={{
        background: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  ) : (
    <ImageBlock
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
