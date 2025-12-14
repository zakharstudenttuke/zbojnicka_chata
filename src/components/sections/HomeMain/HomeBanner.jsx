import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
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
  top: 121px;
  width: 100%;
  right: 40%;
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

const CTAButton = styled(motion.button)`
  margin-top: 30px;
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const CTAText = styled.span`
  color: white;
  font-size: 24px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 24px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const CTAIcon = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => props.theme.colors.frostedBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30);
`;

const HeroBanner = ({ backgroundImage = 'https://placehold.co/1920x1080' }) => {
  const handleReservation = () => {
    // Логіка для резервації
    console.log('Rezervácia kliknutá');
  };

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
          Vitajte na najdivokejšej chate Tatier
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
            Zbojnícka chata
          </Title>
        </TitleWrapper>
        
        <CTAButton
          onClick={handleReservation}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            transition: {duration: 0.2} 
          }}
          whileTap={{ scale: 0.95 }}
        >
          <CTAText>Rezervujte si pobyt</CTAText>
          <CTAIcon>
            <ChevronRight color="#007EA7" size={20} />
          </CTAIcon>
        </CTAButton>
      </Content>
    </BannerContainer>
  );
};

export default HeroBanner;