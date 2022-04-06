import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

import useWindow from '../modules/hooks/useWindow';
import { BorderedButton } from './button';

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
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 320px) {
    width: 17rem;
  }

  @media (min-width: 512px) {
    width: 20rem;
  }
`;

// 이미지 파일 경로, 확장자, 프로젝트 이름, 상세정보, 깃허브 링크, 데모 / 실제 웹 서비스 링크, 상세정보 링크
const Card = ({ img, ext, title, description, github, link, descLink }) => {
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
          {/* 상세정보 링크가 없으면 숨김 */}
          {descLink ? <Link href={descLink}>더 알아보기...</Link> : null}
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
      {/* 더미 카드 */}
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

export default ProjectCarousel;
