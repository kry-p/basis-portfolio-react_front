import router from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { AiOutlineGithub, AiOutlineLink, AiOutlineClose } from 'react-icons/ai';

import useWindow from '../modules/hooks/useWindow';
import { BorderlessButton } from './button';
import palette from '../modules/palette';

// Side project cards
const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 24px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  margin: 1rem 0.5rem 1rem 0.5rem;
  width: 14rem;
  height: 27rem;

  // 카드 영역을 벗어나는 이미지를 숨김
  overflow: hidden;
  transition: 0.5s ease-in-out;

  @media (min-width: 320px) {
    width: 17rem;
  }

  @media (min-width: 512px) {
    margin: 2rem 0.5rem 1rem 0.5rem;
    width: 20rem;
  }
`;

// Cover for side project card
// 이미지 둥글게 처리 및 카드 내용이 들어갈 공간
const ProjectCardCover = styled.div`
  position: absolute;
  background-color: white;
  height: 18rem;
  width: 14rem;
  bottom: 1rem;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0rem;

  transition: 0.5s ease-in-out;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  @media (min-width: 320px) {
    height: 17.5rem;
    width: 17rem;
  }

  @media (min-width: 512px) {
    height: 17rem;
    width: 20rem;
  }
`;

const ButtonText = styled.span`
  @media (max-width: 320px) {
    display: none;
  }
`;

const StyledButtonContainer = styled.div``;

// 이미지 파일 경로, 확장자, 프로젝트 이름, 상세정보, 깃허브 링크, 데모 / 실제 웹 서비스 링크, 상세정보 링크
const Card = ({ img, ext, title, description, github, link, stacks }) => {
  return (
    <ProjectCard>
      <Image
        src={`${img}.${ext}`}
        blurDataURL={`${img}_small.${ext}`}
        alt={`Image of project: ${title}`}
        width={400}
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
            fontSize: '0.9rem',
          }}
        >
          {description}
        </div>
        <div
          style={{
            width: '90%',
            fontFamily: 'MinSans-Medium',
            fontSize: '0.8rem',
            color: 'black',
          }}
        >
          {stacks ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {stacks.map((item) => (
                <div
                  style={{
                    margin: '0.25rem',
                    background: `${palette.gray[2]}`,
                    borderRadius: '1rem',
                    padding: '0.25rem 0.75rem',
                    color: `${palette.gray[8]}`,
                  }}
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div
          style={{
            width: '88.75%',
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <BorderlessButton
            onClick={() => {
              !!github
                ? router.push(github)
                : alert('해당 링크는 준비 중입니다.');
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <AiOutlineGithub
                size={20}
                style={{ paddingBottom: '0.0875rem' }}
              />
              <ButtonText>GitHub</ButtonText>
            </div>
          </BorderlessButton>
          <BorderlessButton
            accent
            onClick={() => {
              !!link ? router.push(link) : alert('해당 링크는 준비 중입니다.');
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <AiOutlineLink size={20} style={{ paddingBottom: '0.0875rem' }} />
              <ButtonText>Link</ButtonText>
            </div>
          </BorderlessButton>
        </div>
      </ProjectCardCover>
    </ProjectCard>
  );
};

// Carousel for project cards
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
        img="/resources/project_gamealive"
        ext="png"
        title="게임얼라이브"
        description={
          <div>
            게임물관리위원회의 심의 정보 API를 이용, 심의가 완료된 게임물의
            정보를 제공하는 웹 서비스입니다.
            <br />
            심의 정보 자동 수집과 날짜별 / 이름별 검색을 지원합니다.
            <br />
            React를 사용한 첫 1인 프론트엔드 프로젝트입니다.
          </div>
        }
        github="https://github.com/kry-p/gamealive-client"
        link="https://gamealive.xyz"
        stacks={['React', 'Redux', 'styled-components']}
      />
      <Card
        img="/resources/project_portfolio"
        ext="png"
        title="개발자 포트폴리오"
        description={
          <div>
            프론트엔드 개발자로서의 나 자신을 소개하는 포트폴리오 웹
            사이트입니다.
            <br />
            지금까지 진행한 프로젝트와 주요 기술 스택, 가치관이 정리되어 있으며
            개발자에게 메일을 보낼 수도 있습니다.
          </div>
        }
        github="https://github.com/kry-p/basis-portfolio-react_front"
        link="#"
        stacks={['React', 'Next.js']}
      />
      <Card
        img="/resources/project_convertit"
        ext="png"
        title="Convert-it! (개발 중)"
        description={
          <div>
            모든 것을 변환해 주는 곳을 목표로 개발 중인 웹 서비스입니다.
            <br />
            2인 팀 프로젝트로 진행 중이며, 프론트엔드 개발을 담당하고 있습니다.
          </div>
        }
        github="https://github.com/kry-p/convert-it_front"
        stacks={['React', 'Next.js']}
      />
    </Carousel>
  );
};

export default ProjectCarousel;
