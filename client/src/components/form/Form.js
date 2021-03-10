import React from "react";
import styled from 'styled-components';
import { Image, LinkContact } from "../Images/Images";
import tick from "../../assets/images/success.png";
import github from "../../assets/images/github.png";
import code from "../../assets/images/code.png";
import linkedin from "../../assets/images/linkedin.png";

const Form = ({ register, onSubmit, sending }) => (
  <>
    <Image src={tick} width='40px' opacity={sending ? 0.6 : 0} padding='0 0 10px' display='inline' />
    <form data-testid='form' onSubmit={onSubmit}>
      <Input placeholder='Name' name='name' type='text' ref={register({ required: true })} />
      <Input placeholder='Email' name='email' type='email' ref={register({ required: true })} />
      <TextArea placeholder='Message' name='message' type='text' ref={register({ required: true })} />
      <Button data-testid="submit" type='submit'>
        Send message
			</Button>
    </form>
    <Links>
      <LinkContact
        src={linkedin} link="https://www.linkedin.com/in/naomi-prescod-green-3299868a/" />
      <LinkContact
        src={github} link="https://github.com/naomigreen" />
      <LinkContact
        src={code} link="https://github.com/naomigreen/portfolio" />
    </Links>
  </>
);
export default Form;

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