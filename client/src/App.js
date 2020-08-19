import React from 'react';
import styled from 'styled-components';
import Routes from './containers/routes/Routes';

function App() {
  const video = 'https://website-background.s3.eu-west-2.amazonaws.com/bg-compressed.mp4';
  return (
    <AppWrapper>
      <Video autoPlay="autoplay" loop="loop" muted>
        <source src={video} type="video/mp4" />
      </Video>
      <Content>
        <Routes />
      </Content>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  right: 0;
	bottom: 0;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export default App;