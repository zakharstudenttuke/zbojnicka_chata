import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import s4_b1_i1 from '../../../assets/images/AboutUsImages/s4-b1-i1.png';

const SectionContainer = styled.section`
  width: 1920px;
  height: 960px;
  padding: 45px 38px;
  overflow: hidden;
  background-image: url(${s4_b1_i1});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const CTAButtonWrapper = styled.div`
  height: 70px;
  margin-top: auto;
  align-self: flex-start;
  padding-top: 35px;
  padding-left: 180px; 
`;

const CTAButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const CTAText = styled.span`
  color: #FFFFFF;
  font-size: 24px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 14px;
`;

const CTAIcon = styled.div`
  width: 25px;
  height: 25px;
  background: ${props => props.theme.colors.frostedBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30);
`;

const MainText = styled.h2`
  color: white;
  font-size: 68px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 500;
  line-height: 68px;
  margin: 0;
  max-width: 900px;
`;

const AboutSection4 = () => {
  return (
    <SectionContainer>
      <Overlay />
      
      <Content>
        <MainText>
          Príďte a staňte sa súčasťou príbehu
        </MainText>
        <CTAButtonWrapper>
            <CTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => console.log('Rezervovať clicked')}
                >
                <CTAText>Rezervovať pobyt</CTAText>
                <CTAIcon>
                    <ChevronRight color="#007EA7" size={12} />
                </CTAIcon>
            </CTAButton>
        </CTAButtonWrapper>

      </Content>
    </SectionContainer>
  );
};

export default AboutSection4;