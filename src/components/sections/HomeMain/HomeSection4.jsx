import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  width: 1920px;
  height: 1080px;
  position: relative;
  padding: 94px 112px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const BackgroundWrapper = styled.div`
  width: 1920px;
  height: 1080px;
  position: absolute;
  left: 0;
  top: 0;
`;

const PlaceholderBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #AE7373;
  top: 0;
  left: 0;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  width: 1344px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  align-self: stretch;
  color: white;
  font-size: 80px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 80px;
  margin: 0;
`;

const Subtitle = styled.h3`
  align-self: stretch;
  color: white;
  font-size: 80px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 80px;
  margin: 0;
`;

const HomeSection4 = ({ backgroundImage = 'https://placehold.co/1920x1080' }) => {
  return (
    <SectionContainer>
      <BackgroundWrapper>
        <PlaceholderBg />
        <BackgroundImage src={backgroundImage} alt="Zbojnícka chata" />
      </BackgroundWrapper>
      
      <ContentWrapper>
        <Title>Zbojnícka chata</Title>
        <Subtitle>Kde končí cesta a začínajú Tatry</Subtitle>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default HomeSection4;