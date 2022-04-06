import { useState } from 'react';
import styled, { css } from 'styled-components';
import emailjs from '@emailjs/browser';
import { AiOutlineSend } from 'react-icons/ai';

import { CommonArticleTitle } from '../components/styles/About';
import { BorderedButton } from '../components/button';

const StyledTextarea = styled.textarea`
  border: 1px solid black;
  padding: 0.75rem;
  font-family: MinSans-Thin;
  font-size: 1rem;
  border-radius: 24px;
  resize: none;
  transition: 0.5s ease-in-out;

  width: 12rem;
  height: 1.25rem;
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

  &:focus {
    outline: none;
  }
`;

const Textarea = ({ name, itemName, placeholder, ...rest }) => {
  return (
    <>
      <div style={{ padding: '0.5rem 0rem 0.5rem 0.75rem' }}>{itemName}</div>
      <StyledTextarea {...rest} name={name} placeholder={placeholder} />
    </>
  );
};

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const handleUpdateName = (e) => setName(e.target.value);
  const handleUpdateEmail = (e) => setEmail(e.target.value);
  const handleUpdateContent = (e) => setContent(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      from_name: name,
      from_email: email,
      message: content,
    };
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (!regex.test(data.from_email)) {
      alert('메일 주소가 올바르지 않습니다.');
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
        data,
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
        <form onSubmit={sendEmail}>
          <Textarea
            name="from_name"
            itemName="NAME"
            placeholder="이름"
            value={name}
            onChange={handleUpdateName}
          />
          <Textarea
            name="from_email"
            itemName="EMAIL"
            placeholder="메일 주소"
            value={email}
            onChange={handleUpdateEmail}
          />
          <Textarea
            long
            name="message"
            itemName="CONTENTS"
            placeholder="여기에 내용을 입력하세요"
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
            <BorderedButton onClick={sendEmail}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <AiOutlineSend style={{ paddingRight: '0.5rem' }} />
                <span>Send</span>
              </div>
            </BorderedButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
