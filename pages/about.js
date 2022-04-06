import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import router from 'next/router';

import AppbarWithoutSSR from '../components/appbar/withoutSSR';
import styled, { css } from 'styled-components';

import Fade from 'react-reveal/Fade';
import Carousel from 'react-elastic-carousel';
import useWindow from '../modules/hooks/useWindow';
import { BorderedButton } from '../components/button';

import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import Guide from '../components/Guide';

import ContactUs from '../containers/ContactUs';

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
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.single &&
    css`
      height: 100vh;
      grid-template-columns: 1fr;
      width: calc(0.5 * (100vw - 1024px) + 1024px);
    `}

  ${(props) =>
    props.double &&
    css`
      @media (min-width: 1024px) {
        height: 100vh;
        grid-template-columns: 1fr 1fr;
        width: 1024px;
      }
    `}
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
    props.ownName &&
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

const AboutArticleTitle = styled.h2`
  line-height: 0%;
  font-family: MinSans-Medium;

  @media (max-width: 512px) {
    font-size: 1.1rem;
  }
`;

const AboutArticleDescription = styled.article`
  text-align: end;
  padding-bottom: 1rem;

  @media (max-width: 512px) {
    font-size: 0.85rem;

    padding-bottom: 0.2rem;
  }
`;

const TechStackArticle = styled.div`
  display: grid;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  gap: 20px;

  @media (max-width: 511px) {
    grid-template-rows: repeat(2, minmax(12rem, auto));
  }

  @media (min-width: 512px) {
    grid-template-columns: repeat(2, minmax(12rem, auto));
  }

  @media (min-width: 768px) {
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    gap: 6rem;
  }
`;

export const CommonArticleTitle = styled.div`
  border-bottom: 1px solid black;
  transition: all 0.5s ease-in-out;
  font-size: 1.2rem;

  @media (min-width: 384px) {
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  ${(props) =>
    props.small &&
    css`
      width: 8rem;

      @media (min-width: 384px) {
        width: 10rem;
      }

      @media (min-width: 512px) {
        width: 12rem;
      }

      @media (min-width: 768px) {
        width: 14rem;
      }
    `}

  ${(props) =>
    props.big &&
    css`
      width: 12rem;

      @media (min-width: 384px) {
        width: 15rem;
      }

      @media (min-width: 512px) {
        width: 18rem;
      }

      @media (min-width: 768px) {
        width: 24rem;
      }
    `}
`;
const TechStackArticleDescription = styled.div`
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  margin: 1rem 0.5rem 1rem 0.5rem;
  width: 14rem;
  height: 27rem;

  @media (min-width: 320px) {
    width: 17rem;
  }

  @media (min-width: 512px) {
    margin: 2rem 0.5rem 1rem 0.5rem;
    width: 20rem;
  }

  border-radius: 24px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

const ProjectCardCover = styled.div`
  position: absolute;
  background-color: white;
  height: 18rem;
  width: 14rem;
  bottom: 1rem;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 320px) {
    width: 17rem;
  }

  @media (min-width: 512px) {
    width: 20rem;
  }
`;

const Card = ({ img, ext, title, description, github, link }) => {
  return (
    <ProjectCard>
      <Image
        src={`${img}.${ext}`}
        blurDataURL={`${img}_small.${ext}`}
        alt={`Image of project: ${title}`}
        width={320}
        height={250}
        objectFit="cover"
        placeholder="blur"
      />
      <ProjectCardCover>
        <div
          style={{
            width: '85%',
            fontFamily: 'MinSans-Bold',
            fontSize: '1.2rem',
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: '85%',
            fontFamily: 'MinSans-Thin',
            fontSize: '0.8rem',
          }}
        >
          {description}
        </div>
        <div
          style={{
            width: '85%',
            fontFamily: 'MinSans-Thin',
            fontSize: '1rem',
            color: 'black',
          }}
        >
          <Link href="/asdb">더 알아보기...</Link>
        </div>
        <div
          style={{
            width: '85%',
            display: 'grid',
            gap: '0.5rem',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <BorderedButton onClick={() => router.push(github)}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <AiOutlineGithub />
              <span>GitHub</span>
            </div>
          </BorderedButton>
          <BorderedButton onClick={() => router.push(link)}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <AiOutlineLink />
              <span>Link</span>
            </div>
          </BorderedButton>
        </div>
      </ProjectCardCover>
    </ProjectCard>
  );
};

const ProjectCarousel = () => {
  const [width, setWidth] = useState(undefined);
  const windowInfo = useWindow();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [windowInfo]);

  return (
    <Carousel
      itemsToScroll={1}
      itemsToShow={width >= 768 ? (width >= 1024 ? 3 : 2) : 1}
      enableAutoPlay
      autoPlaySpeed={12000}
      renderArrow={() => <div />}
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: '1rem',
              alignItems: 'center',
            }}
          >
            {pages.map((page) => {
              const isActivePage = activePage === page;
              return (
                <div
                  key={page}
                  onClick={() => onClick(page)}
                  style={{
                    width: `${isActivePage ? '0.75rem' : '0.5rem'}`,
                    height: `${isActivePage ? '0.75rem' : '0.5rem'}`,
                    borderRadius: '1rem',
                    margin: '0rem 0.5rem 0rem 0.5rem',
                    backgroundColor: `${
                      isActivePage ? 'rgb(80, 80, 80)' : 'rgb(200, 200, 200)'
                    }`,
                    transition: '0.25s ease-out',
                  }}
                />
              );
            })}
          </div>
        );
      }}
    >
      <Card
        img="/resources/test1"
        ext="jpg"
        title="프로젝트 1"
        description="못하다 사는가 미묘한 영원히 때에, 피다. 이상의 눈에 예가 끓는 가장 어디 주며, 이상은 돋고, 것이다. 지혜는 소담스러운 가는 트고, 주는 살았으며, 쓸쓸하랴? 황금시대를 이상의 찬미를 약동하다. 천고에 뛰노는 청춘을 인생에 보는 크고 피부가 남는 방황하여도, 사막이다. 듣기만 대고, 이상은 보이는 청춘의 그들을 싶이 구하지 것이다. 사람은 풍부하게 트고, 끓는 그들을 피어나기 피고 것이다."
        github="#"
        link="#"
      />
      <Card
        img="/resources/test2"
        ext="jpg"
        title="프로젝트 2"
        description="못하다 사는가 미묘한 영원히 때에, 피다. 이상의 눈에 예가 끓는 가장 어디 주며, 이상은 돋고, 것이다. 지혜는 소담스러운 가는 트고, 주는 살았으며, 쓸쓸하랴? 황금시대를 이상의 찬미를 약동하다. 천고에 뛰노는 청춘을 인생에 보는 크고 피부가 남는 방황하여도, 사막이다. 듣기만 대고, 이상은 보이는 청춘의 그들을 싶이 구하지 것이다. 사람은 풍부하게 트고, 끓는 그들을 피어나기 피고 것이다."
        github="#"
        link="#"
      />
      <Card
        img="/resources/test3"
        ext="jpg"
        title="프로젝트 3"
        description="못하다 사는가 미묘한 영원히 때에, 피다. 이상의 눈에 예가 끓는 가장 어디 주며, 이상은 돋고, 것이다. 지혜는 소담스러운 가는 트고, 주는 살았으며, 쓸쓸하랴? 황금시대를 이상의 찬미를 약동하다. 천고에 뛰노는 청춘을 인생에 보는 크고 피부가 남는 방황하여도, 사막이다. 듣기만 대고, 이상은 보이는 청춘의 그들을 싶이 구하지 것이다. 사람은 풍부하게 트고, 끓는 그들을 피어나기 피고 것이다."
        github="#"
        link="#"
      />
    </Carousel>
  );
};

const Content = () => (
  <>
    <Guide />
    <Page oddPage>
      <Grid double style={{ fontFamily: 'D2Coding' }}>
        <Left>
          <Fade right>
            <FontStyle left oddPage>
              Hello.
            </FontStyle>
          </Fade>
        </Left>
        <Right>
          <Fade left>
            <FontStyle right ownName oddPage>
              I'm
            </FontStyle>
          </Fade>
          <Fade left>
            <FontStyle right ownName oddPage>
              JAEHUN
            </FontStyle>
          </Fade>
          <Fade left>
            <FontStyle right ownName oddPage>
              JUNG
            </FontStyle>
          </Fade>
        </Right>
      </Grid>
    </Page>
    <Page>
      <Grid double>
        <Left>
          <Fade right>
            <FontStyle left>I am</FontStyle>
            <FontStyle left>Junior</FontStyle>
            <FontStyle left>Front-end</FontStyle>
            <FontStyle left>Developer.</FontStyle>
          </Fade>
        </Left>
        <Fade clear>
          <Right article>
            <AboutArticle>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <AboutArticleTitle>About me</AboutArticleTitle>
                <AboutArticleDescription>
                  안녕하세요, 프론트엔드 개발자를 목표로 하는 정재훈입니다.
                  <br />
                  열심히 공부하고, 열심히 쉬며, 열심히 놉니다.
                  <br />
                </AboutArticleDescription>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <AboutArticleTitle>"Good code" is...</AboutArticleTitle>
                <AboutArticleDescription>
                  제가 생각하는 좋은 코드는 주석을 최소화할 수 있고, 효율적인
                  코드입니다.
                  <br />
                  <br />
                  좋은 코드는 읽기 쉽고 네이밍 컨벤션이 잘 정리되어 있어 부연
                  설명을 위한 주석의 필요성을 최소화합니다.
                  <br />
                  또, 컴퓨터의 자원은 유한하므로 동일한 결과를 제공한다면 자원을
                  적게 사용하는 쪽이 좋은 코드라 할 수 있습니다.
                </AboutArticleDescription>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <AboutArticleTitle>My goal</AboutArticleTitle>
                <AboutArticleDescription>
                  항상 공부하며 자신을 발전시키는 개발자가 되고자 합니다.
                  <br />
                  프론트엔드 개발자로서의 길을 달려 온 1년여의 기간 동안 전혀
                  손대보지 않은 언어와 라이브러리에 손을 뻗었고, 잘 만들어진 웹
                  사이트를 관찰, 모방하기도 하였습니다.
                  <br />
                  앞으로 달려갈 길이 순탄치 않겠지만, 모든 노력이 더 나은 내일을
                  위한 거름이 되도록 최선을 다하겠습니다.
                </AboutArticleDescription>
              </div>
            </AboutArticle>
          </Right>
        </Fade>
      </Grid>
    </Page>
    <Page>
      <Grid single>
        <TechStackArticle>
          <Fade bottom>
            <article>
              <CommonArticleTitle small>My tech stacks.</CommonArticleTitle>
              <TechStackArticleDescription>
                NodeJs
                <br />
                HTML / CSS
                <br />
                Koa
                <br />
                React
              </TechStackArticleDescription>
            </article>
          </Fade>
          <Fade bottom>
            <article>
              <CommonArticleTitle big>My interests.</CommonArticleTitle>
              <TechStackArticleDescription>
                Lorem
                <br />
                Ipsum
                <br />
                Dolor
                <br />
                Sit amet
              </TechStackArticleDescription>
            </article>
          </Fade>
        </TechStackArticle>
      </Grid>
    </Page>
    <Page>
      <Grid single>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Fade right>
            <CommonArticleTitle big>My front-end projects.</CommonArticleTitle>
          </Fade>
          <ProjectCarousel />
        </div>
      </Grid>
    </Page>
    <Page>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ContactUs />
        <div
          style={{ width: '100vw', height: '30vh', background: 'black' }}
        ></div>
      </div>
    </Page>
  </>
);

const Index = () => {
  return (
    <>
      <AppbarWithoutSSR title="BASIS" />
      {/* About me */}
      <Content />
    </>
  );
};

export default Index;
