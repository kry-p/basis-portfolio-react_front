import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import emailjs from '@emailjs/browser';

import { CommonArticleTitle } from '../components/styles/About';
import { BorderlessInput } from '../components/button';

const StyledTextarea = styled.textarea`
  border: 1px solid black;
  padding: 0.75rem;
  font-family: MinSans-Thin;
  font-size: 1rem;
  border-radius: 24px;
  resize: none;
  transition: 0.25s ease-in-out;

  width: 12rem;
  height: 1.25rem;

  // 브라우저 폭에 따라 폼 너비가 넓어지게 처리
  @media (min-width: 384px) {
    width: 16rem;
  }

  @media (min-width: 512px) {
    width: 20rem;
  }

  @media (min-width: 768px) {
    width: 24rem;
  }

  ${(props) =>
    props.long &&
    css`
      height: 8rem;
    `}

  // 포커스 시
  &:focus {
    border: 1px solid red;
    outline: none; // 기본 하이라이트 제거
  }
`;

const Textarea = ({ name, itemName, ...rest }) => {
  return (
    <>
      <div style={{ padding: '0.5rem 0rem 0.5rem 0.75rem' }}>{itemName}</div>
      <StyledTextarea {...rest} name={name} />
    </>
  );
};

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const handleUpdateName = (e) => setName(e.target.value);
  const handleUpdateEmail = (e) => setEmail(e.target.value);
  const handleUpdateContent = (e) => setContent(e.target.value);

  // 메일 발송
  const sendEmail = (e) => {
    e.preventDefault();
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (!regex.test(email)) {
      alert('메일 주소가 올바르지 않습니다.');
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USERID,
      )
      .then(
        () => {
          alert('메일 전송에 성공했습니다.');
        },
        () => {
          alert('메일 전송 중 서버 오류가 발생했습니다.');
        },
      );
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CommonArticleTitle big>Wanna contact?</CommonArticleTitle>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1rem',
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <Textarea
            name="from_name"
            itemName="NAME"
            placeholder="이름"
            required
            value={name}
            onChange={handleUpdateName}
          />
          <Textarea
            name="from_email"
            itemName="EMAIL"
            placeholder="메일 주소"
            type="email"
            required
            value={email}
            onChange={handleUpdateEmail}
          />
          <Textarea
            long
            name="message"
            itemName="CONTENTS"
            placeholder="여기에 내용을 입력하세요"
            required
            value={content}
            onChange={handleUpdateContent}
          />
          <div
            style={{
              paddingTop: '0.5rem',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <BorderlessInput type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
