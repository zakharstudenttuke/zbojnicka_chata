import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlockContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 720px;
  position: absolute;
  bottom: 0;
  left: 0;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 91px 60px;
`;

const TitleUnderline = styled.div`
  width: 100px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue};
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  color: black;
  font-size: 36px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 300;
  line-height: 36px;
  margin-bottom: 10px;
  width: fit-content;
  margin-left: 20px;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  color: black;
  font-size: 40px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 800;
  line-height: 40px;
  margin-bottom: 0;
  max-width: 750px;
  margin-left: 50px;
`;

const Description = styled.p`
  max-width: 750px;
  opacity: 0.7;
  color: #1A1917;
  font-size: 20px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 28px;
  padding: 20px 0px 10px;
  margin-left: 50px;
  margin-top: 0;
`;

const CTAButtonWrapper = styled.div`
  height: 70px;
  margin-top: auto;
  align-self: flex-start;
  padding-top: 20px;
  padding-left: 110px; 
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
  color: ${props => props.dark ? '#FFFFFF' : '#000000'};
  font-size: 14px;
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

const LargeTextWithImageBlock = ({ 
  subtitle, 
  title, 
  description, 
  ctaText, 
  onCtaClick,
  backgroundImage 
}) => {
  return (
    <BlockContainer>
      {backgroundImage && <BackgroundImage src={backgroundImage} alt="Background" />}
      
      <Content>
        <SubtitleWrapper>
          <TitleUnderline />
        <Subtitle>{subtitle}</Subtitle>
        </SubtitleWrapper>
        
        <Title>{title}</Title>
        <Description>{description}</Description>
        
        {ctaText && (
          <CTAButtonWrapper>
            <CTAButton
              onClick={onCtaClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CTAText>{ctaText}</CTAText>
              <CTAIcon>
                <ChevronRight color="#007EA7" size={12} />
              </CTAIcon>
            </CTAButton>
          </CTAButtonWrapper>
        )}
      </Content>
    </BlockContainer>
  );
};

export default LargeTextWithImageBlock;