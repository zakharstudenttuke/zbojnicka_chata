import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BannerContainer = styled.section`
  width: 1920px;
  height: 1080px;
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
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(26, 25, 23, 0.20) 70%);
  z-index: 2;
`;

const Content = styled.div`
  position: absolute;
  top: 121px;
  left: 50%;
  transform: translateX(-50%);
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
  font-weight: 300;
  line-height: 68px;
  margin-bottom: 29px;
  white-space: nowrap;
`;

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
`;

const TitleUnderline = styled(motion.div)`
  width: 230px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue};
  margin: 0 auto 8px auto;
`;

const Title = styled(motion.h1)`
  font-size: 68px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 800;
  line-height: 68px;
  white-space: nowrap;
`;

const CTAButton = styled(motion.button)`
  margin-top: 28px;
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

const HeroBanner = ({ 
  backgroundImage = 'https://placehold.co/1920x1080',
  subtitle = 'Vitajte na najdivokejšej chate Tatier',
  title = 'Zbojnícka chata',
  ctaText = 'Rezervujte si pobyt',
  onCtaClick
}) => {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      console.log('CTA clicked');
    }
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
          {subtitle}
        </Subtitle>
        
        <TitleWrapper>
          <TitleUnderline
            initial={{ width: 0 }}
            animate={{ width: 230 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          
          <Title
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title}
          </Title>
        </TitleWrapper>
        
        {ctaText && (
          <CTAButton
            onClick={handleClick}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CTAText>{ctaText}</CTAText>
            <CTAIcon>
              <ChevronRight color="white" size={20} />
            </CTAIcon>
          </CTAButton>
        )}
      </Content>
    </BannerContainer>
  );
};

export default HeroBanner;