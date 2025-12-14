import styled from 'styled-components';
import { motion } from 'framer-motion';

const BannerContainer = styled.section`
  width: 1920px;
  height: 1080px;
  min-height: 1080px;
  position: relative;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Content = styled.div`
  position: absolute;
  top: 281px;
  width: 100%;
  right: 50%;
  transform: translateX(50%);
  z-index: 3;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(motion.h2)`
  font-size: 68px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 200;
  line-height: 68px;
  margin-bottom: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 48px;
    line-height: 48px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 68px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 800;
  line-height: 68px;
  white-space: nowrap;
  
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 48px;
    line-height: 48px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const TitleUnderline = styled(motion.div)`
  width: 230px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue};
  margin: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 150px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const AboutUsBanner = ({ backgroundImage = 'https://placehold.co/1920x1080' }) => {

  return (
    <BannerContainer>
      <BannerImage src={backgroundImage} alt="Zbojnícka chata" />
      <Overlay />
      
      <Content>
        <Subtitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          História Zbojníckej chaty
        </Subtitle>

        <TitleWrapper>
          <TitleUnderline
            initial={{ width: 0 }}
            animate={{ width: 230 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <Title
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Od roku 1948 strážime <br></br>Veľkú Studenú dolinu
          </Title>
        </TitleWrapper>
        
      </Content>
    </BannerContainer>
  );
};

export default AboutUsBanner;