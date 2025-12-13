import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlockContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: ${props => props.dark ? '#000000' : '#FFFFFF'};
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  width: 390px;
  height: 100%;
  padding: 45px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; — не обов'язково, бо margin-top: auto на CTA достатньо */
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Subtitle = styled.div`
  color: ${props => props.dark ? '#FFFFFF' : '#000000'};
  font-size: ${props => props.size || '25px'};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 300;
  line-height: ${props => props.size || '25px'};
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TitleUnderline = styled.div`
  width: 40px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue};
`;

const Title = styled.div`
  color: ${props => props.dark ? '#FFFFFF' : '#000000'};
  font-size: ${props => props.size || '25px'};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 800;
  line-height: ${props => props.size || '25px'};
`;

const Description = styled.div`
  padding: 0px 10px 10px;
  width: 370px;
  color: ${props => props.dark ? '#C6C1BB' : '#1A1917'};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 24px;
`;

const CTAButtonWrapper = styled.div`
  height: 70px;
  margin-top: auto;
  align-self: flex-start;
  padding-left: 44px; 
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

const TextBlock = ({ 
  subtitle, 
  title, 
  description, 
  ctaText, 
  onCtaClick, 
  dark = false,
  subtitleSize,
  titleSize,
}) => {
  return (
    <BlockContainer 
      dark={dark}
      transition={{ duration: 0.3 }}
    >
      <Content>
        <MainContent>
          <TitleSection>
            <SubtitleWrapper>
              <div style={{ width: 10 }} />
              <Subtitle dark={dark} size={subtitleSize}>{subtitle}</Subtitle>
            </SubtitleWrapper>
            
            <TitleWrapper>
              <TitleUnderline />
              <Title dark={dark} size={titleSize}>{title}</Title>
            </TitleWrapper>
          </TitleSection>

          <Description dark={dark}>
            {description}
          </Description>
        </MainContent>

        {ctaText && (
          <CTAButtonWrapper>
            <CTAButton
              onClick={onCtaClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CTAText dark={dark}>{ctaText}</CTAText>
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

export default TextBlock;