import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "next/link";

import ContactUs from "../containers/ContactUs";
import { AppbarWithoutSSR, BokehsWithoutSSR } from "../components/withoutSSR";
import ProjectCarousel from "../components/Carousel";
import Guide from "../components/Guide";
import { FooterButton } from "../components/button";
import {
  PageAbout,
  Grid,
  Left,
  Right,
  Typo,
  AboutArticle,
  AboutArticleTitle,
  AboutArticleDescription,
  TechStackArticle,
  TechStackArticleDescription,
  CommonArticleTitle,
} from "../components/styles";

import { AiOutlineMail, AiFillGithub, AiOutlinePhone } from "react-icons/ai";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  transition: all 0.5s ease-in-out;
  @media (min-width: 384px) {
    width: 18rem;
  }

  @media (min-width: 512px) {
    width: 24rem;
  }

  @media (min-width: 768px) {
    width: 30rem;
  }

  @media (min-width: 1024px) {
    width: 36rem;
  }
`;

const Content = () => (
  <>
    <Guide />
    <PageAbout oddPage>
      <Grid single style={{ fontFamily: "D2Coding" }}>
        <Left>
          <Fade right>
            <Typo left oddPage>
              Hello.
            </Typo>
          </Fade>
          <div>
            <Fade left>
              <Typo right ownName oddPage>
                I&apos;m
              </Typo>
            </Fade>
            <Fade left>
              <Typo right ownName oddPage>
                JAEHUN
              </Typo>
            </Fade>
            <Fade left>
              <Typo right ownName oddPage>
                JUNG
              </Typo>
            </Fade>
          </div>
        </Left>
      </Grid>
    </PageAbout>
    <PageAbout>
      <Grid double>
        <Left>
          <Fade right>
            <Typo left>I am</Typo>
            <Typo left>Junior</Typo>
            <Typo left>Front-end</Typo>
            <Typo left>Developer.</Typo>
          </Fade>
        </Left>
        <Fade clear>
          <Right article>
            <AboutArticle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <AboutArticleTitle>About me</AboutArticleTitle>
                <AboutArticleDescription>
                  안녕하세요, 프론트엔드 개발자를 목표로 하는 정재훈입니다.
                  <br />
                  열심히 공부하고, 때로는 취미생활을, 때로는 열심히 놉니다.
                  <br />
                </AboutArticleDescription>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <AboutArticleTitle>&quot;Good code&quot; is...</AboutArticleTitle>
                <AboutArticleDescription>
                  제가 생각하는 좋은 코드는 주석이 최소화되는 코드입니다.
                  <br />
                  <br />
                  좋은 코드는 코딩 컨벤션이 잘 정리되어 있어 가독성이 높아, 주석으로 부연설명을 할 필요성이 줄어듭니다.
                  <br />
                  퍼포먼스가 중요치 않은 코드는 없지만, 같은 로직을 수행하는 코드라면 읽기 좋은 코드가 좋은 코드입니다.
                </AboutArticleDescription>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <AboutArticleTitle>My goal</AboutArticleTitle>
                <AboutArticleDescription>
                  항상 공부하며 자신을 발전시키는 개발자가 되고자 합니다.
                  <br />
                  프론트엔드 개발자로서의 길을 달려 온 1년여의 기간 동안 전혀 손대보지 않은 언어와 라이브러리에 손을 뻗었고, 잘 만들어진 웹
                  사이트를 관찰, 모방하기도 하였습니다.
                  <br />
                  앞으로 달려갈 길이 순탄치 않겠지만, 모든 노력이 더 나은 내일을 위한 거름이 되도록 최선을 다하겠습니다.
                </AboutArticleDescription>
              </div>
            </AboutArticle>
          </Right>
        </Fade>
      </Grid>
    </PageAbout>
    <PageAbout>
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
              <CommonArticleTitle big>Now studying.</CommonArticleTitle>
              <TechStackArticleDescription>
                JavaScript
                <br />
                State mgnt.
              </TechStackArticleDescription>
            </article>
          </Fade>
        </TechStackArticle>
      </Grid>
    </PageAbout>
    <PageAbout>
      <Grid single>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Fade right>
            <CommonArticleTitle big>My front-end projects.</CommonArticleTitle>
          </Fade>
          <ProjectCarousel />
        </div>
      </Grid>
    </PageAbout>
    <PageAbout>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ContactUs />
        <div
          style={{
            width: "100vw",
            height: "30vh",
            background: "black",
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Footer>
            <div style={{ fontSize: "1.5rem", fontFamily: "MinSans-Medium" }}>JAEHUN JUNG</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr",
                alignItems: "center",
                paddingTop: "0.25rem",
                gap: "0.25rem",
              }}
            >
              <Link href="mailto:jhjung.dev@gmail.com" passHref>
                <FooterButton>
                  <AiOutlineMail size="16" color="white" />
                </FooterButton>
              </Link>
              <div>jhjung.dev@gmail.com</div>
              <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_LINK}`} passHref>
                <FooterButton>
                  <AiOutlinePhone size="16" color="white" />
                </FooterButton>
              </Link>
              <div>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</div>
              <Link href="https://github.com/kry-p" passHref>
                <FooterButton>
                  <AiFillGithub size="16" color="white" />
                </FooterButton>
              </Link>
              <div>kry-p</div>
            </div>
          </Footer>
        </div>
      </div>
    </PageAbout>
  </>
);

const Index = () => {
  return (
    <>
      <BokehsWithoutSSR />
      <AppbarWithoutSSR title="BASIS" />
      <Content />
    </>
  );
};

export default Index;
