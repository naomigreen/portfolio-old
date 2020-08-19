import React, { useState } from "react";
import styled from 'styled-components';
import { Image, LinkContact } from "../images/Images";
import tick from "../../assets/images/success.png";
import github from "../../assets/images/github.png";
import code from "../../assets/images/code.png";
import linkedin from "../../assets/images/linkedin.png";

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendMessage(
      name,
      email,
      message,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_USERID,
      process.env.REACT_APP_EMAILJS_RECEIVER
    );
    setFormSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  function sendMessage(senderName, senderEmail, senderMessage, templateId, serviceId, userID) {
    window.emailjs
      .send(
        serviceId,
        templateId,
        {
          from_email: senderEmail,
          from_name: senderName,
          message_html: senderMessage
        },
        userID
      )
      .then((res) => {
        setFormSent(false);
      })
      .catch((err) => console.error('Failed to send message. Error: ', err));
  }
  return (

    <form onSubmit={handleSubmit}>
      <Image src={tick} width='40px' opacity={formSent ? 0.6 : 0} padding='0 0 10px' display='inline' />
      <Input
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        type='text'
        required
      />
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type='email'
        required
      />
      <TextArea
        placeholder='Message'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        required
      />
      <Button type='submit'>
        Send message
			</Button>
      <Links>
        <LinkContact
          src={linkedin} link="https://www.linkedin.com/in/naomi-prescod-green-3299868a/" />
        <LinkContact
          src={github} link="https://github.com/naomigreen" />
        <LinkContact
          src={code} link="https://github.com/naomigreen/portfolio" />
      </Links>
    </form>
  );
}

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 7px 10px;
  margin: 10px 0;
  border: 1px solid #0b2322;
  border-radius: 5px;
  outline: none;
  color: #fff;
  background:#0000008c;
  font-size: 16px;
  ::placeholder{
    color: #afa8a8;
  }
  :-webkit-autofill:focus, :-webkit-autofill:hover, :-webkit-autofill{
    -webkit-text-fill-color: #afa8a8;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
  }
`;

const TextArea = styled.textarea`
  width: calc(100% - 22px);
  padding: 7px 10px;
  margin: 10px 0;
  border: 1px solid #0b2322;
  border-radius: 5px;
  outline: none;
  color: #fff;
  background-color: #0000008c;
  font-size: 16px;
  min-height: 200px;
  font-family: Helvetica, monospace;
  ::placeholder{
    color: #afa8a8;
  }
`;

const Button = styled.button`
  transition: all 0.8s ease;
  padding: 10px;
  border: 1px solid #0b2322;
  border-radius: 5px;
  color: #afa8a8;
  background:#0000008c;
  font-size: 14px;
  :hover {
    background: #1848473d;
    color: #fff;
  }
`;

const Links = styled.div`
  display: inline-block;
  float: right;
`;