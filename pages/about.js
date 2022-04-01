import AppbarWithoutSSR from '../components/appbar/withoutSSR';
import styled, { css } from 'styled-components';

import Fade from 'react-reveal/Fade';

const Page = styled.div`
  font-family: MinSans-Thin;
  background: rgb(255, 255, 255);
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.oddPage &&
    css`
      background: rgb(0, 0, 0);
    `}
`;

const Grid = styled.div`
  height: 200vh;
  display: grid;
  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    width: calc(0.5 * (100vw - 1024px) + 1024px);
  }
  grid-template-rows: 1fr 1fr;
`;

const Left = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  padding-left: 1rem;

  @media (min-width: 384px) {
    padding-left: 1.5rem;
  }
  @media (min-width: 512px) {
    padding-left: 2rem;
  }
`;

const Right = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;

  padding-right: 1rem;
  padding-left: 1rem;

  @media (min-width: 384px) {
    padding-right: 1.5rem;
  }
  @media (min-width: 512px) {
    padding-right: 2rem;
  }
`;

const FontStyle = styled.span`
  font-size: 3rem;

  @media (min-width: 384px) {
    font-size: 4rem;
  }
  @media (min-width: 512px) {
    font-size: 6rem;
  }

  ${(props) =>
    props.name &&
    css`
      line-height: 80%;

      @media (min-width: 768px) {
        font-size: 10rem;
      }
    `}
  ${(props) =>
    props.oddPage &&
    css`
      color: white;
    `}
    ${(props) =>
    props.small &&
    css`
      color: white;
    `}
`;

const AboutArticle = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  width: 220px;
  @media (min-width: 512px) {
    width: 384px;
  }
`;

const ArticleTitle = styled.h2`
  line-height: 0%;

  @media (max-width: 512px) {
    font-size: 1.1rem;
  }
`;

const ArticleDescription = styled.article`
  text-align: end;
  padding-bottom: 1rem;

  @media (max-width: 512px) {
    font-size: 0.85rem;

    padding-bottom: 0.2rem;
  }
`;

const Index = () => {
  return (
    <>
      <AppbarWithoutSSR title="BASIS" />
      {/* About me */}
      <Page oddPage>
        <Grid style={{ fontFamily: 'D2Coding' }}>
          <Left>
            <Fade right>
              <FontStyle left oddPage>
                Hello.
              </FontStyle>
            </Fade>
          </Left>
          <Right>
            <Fade left>
              <FontStyle right name oddPage>
                I'm
              </FontStyle>
            </Fade>
            <Fade left>
              <FontStyle right name oddPage>
                JAEHUN
              </FontStyle>
            </Fade>
            <Fade left>
              <FontStyle right name oddPage>
                JUNG
              </FontStyle>
            </Fade>
          </Right>
        </Grid>
      </Page>
      <Page>
        <Grid right>
          <Left>
            <Fade right>
              <FontStyle left>I am</FontStyle>
              <FontStyle left>Junior</FontStyle>
              <FontStyle left>Front-end</FontStyle>
              <FontStyle left>Developer.</FontStyle>
            </Fade>
          </Left>
          <Fade left>
            <Right article>
              <AboutArticle>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}
                >
                  <ArticleTitle>About me</ArticleTitle>
                  <ArticleDescription>
                    안녕하세요, 프론트엔드 개발자를 목표로 하는 정재훈입니다.
                    <br />
                    열심히 공부하고, 열심히 쉬며, 열심히 놉니다.
                    <br />
                  </ArticleDescription>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}
                >
                  <ArticleTitle>"Good code" is...</ArticleTitle>
                  <ArticleDescription>
                    제가 생각하는 좋은 코드는 주석을 최소화할 수 있고, 효율적인
                    코드입니다.
                    <br />
                    <br />
                    좋은 코드는 읽기 쉽고 네이밍 컨벤션이 잘 정리되어 있어 부연
                    설명을 위한 주석의 필요성을 최소화합니다.
                    <br />
                    또, 컴퓨터의 자원은 유한하므로 동일한 결과를 제공한다면
                    자원을 적게 사용하는 쪽이 좋은 코드라 할 수 있습니다.
                  </ArticleDescription>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}
                >
                  <ArticleTitle>My goal</ArticleTitle>
                  <ArticleDescription>
                    항상 공부하며 자신을 발전시키는 개발자가 되고자 합니다.
                    <br />
                    프론트엔드 개발자로서의 길을 달려 온 1년여의 기간 동안 전혀
                    손대보지 않은 언어와 라이브러리에 손을 뻗었고, 잘 만들어진
                    웹 사이트를 관찰, 모방하기도 하였습니다.
                    <br />
                    앞으로 달려갈 길이 순탄치 않겠지만, 모든 노력이 더 나은
                    내일을 위한 거름이 되도록 최선을 다하겠습니다.
                  </ArticleDescription>
                </div>
              </AboutArticle>
            </Right>
          </Fade>
        </Grid>
      </Page>
    </>
  );
};

export default Index;