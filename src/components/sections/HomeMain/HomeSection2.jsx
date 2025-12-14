import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import s2_b1_i1 from '../../../assets/images/HomeImages/s2-b1-i1.png';
import Mountain from '../../../assets/images/HomeImages/mountain.png';
import Binoculars from '../../../assets/images/HomeImages/binoculars.png';
import Map from '../../../assets/images/HomeImages/map.png';


const SectionContainer = styled.section`
  width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
  overflow: hidden;
`;

const PlaceholderBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #AE7373;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ContentBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
  background: white;
  overflow: hidden;
`;

const Content = styled.div`
  width: 800px;
  height: 500px;
  position: absolute;
  left: 80px;
  top: 147px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
`;

const Subtitle = styled.div`
  width: 680px;
  color: black;
  font-size: 40px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 300;
  line-height: 40px;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const TitleUnderline = styled.div`
  width: 100px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue};
`;

const Title = styled.h2`
  width: 750px;
  color: black;
  font-size: 40px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 800;
  line-height: 40px;
  margin-left: 50px;
`;

const Description = styled.div`
  width: 750px;
  height: 96px;
  position: relative;
  opacity: 0.7;
`;

const DescriptionText = styled.p`
  width: 750px;
  position: absolute;
  left: 55px;
  top: 20px;
  color: #1A1917;
  font-size: 24px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`;

const ActivitiesList = styled.div`
  width: 380px;
  height: 164px;
  padding-top: 80px;
  padding-left: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 21.5px;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const ActivityIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const ActivityText = styled.div`
  color: black;
  font-size: 18px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 18px;
`;

const CTAWrapper = styled.div`
  width: 203px;
  padding-top: 80px;
  padding-left: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CTAButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const CTAText = styled.span`
  color: black;
  font-size: 14px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 14px;
  text-align: left;
`;

const CTAIcon = styled.div`
  width: 45px;
  height: 25px;
  background: ${props => props.theme.colors.frostedBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.30);
`;

const HomeSection2 = () => {
  const activities = [
    { text: 'Túry na štíty a sedlá', icon: Mountain },
    { text: 'Výstupy s horským vodcom', icon: Map },
    { text: 'Pozorovanie kamzíkov a svišťov', icon: Binoculars },
  ];
  const navigate = useNavigate();

  return (
    <SectionContainer>
      {/* Ľavý blok - Obrázok */}
      <ImageBlock>
        <PlaceholderBg />
        <Image src={s2_b1_i1} alt="Aktivity" />
      </ImageBlock>

      {/* Pravý blok - Obsah */}
      <ContentBlock>
        <Content>
          <SubtitleWrapper>
            <TitleUnderline />
            <Subtitle>Aktivity a výlety</Subtitle>
          </SubtitleWrapper>
          
          <Title>Priamo z prahu chaty</Title>
          
          <Description>
            <DescriptionText>
              Zbojnícka chata stojí uprostred najdivokejšej časti Vysokých Tatier. 
              Odtiaľto vedú cesty na Lomnický štít, Jahňací štít, Prielom, na hrebene 
              aj do susedných dolín. Žiadne lanovky, žiadne davy – len vy a skutočné veľhory.
            </DescriptionText>
          </Description>

          <ActivitiesList>
            {activities.map((activity, index) => (
              <React.Fragment key={index}>
                <ActivityItem>
                  <ActivityIcon src={activity.icon} alt={activity.text} />
                  <ActivityText>{activity.text}</ActivityText>
                </ActivityItem>
              </React.Fragment>
            ))}
          </ActivitiesList>

          <CTAWrapper>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/activities')}
            >
              <CTAText>Zobraziť všetky túry a aktivity</CTAText>
              <CTAIcon>
                <ChevronRight color="#007EA7" size={12} />
              </CTAIcon>
            </CTAButton>
          </CTAWrapper>
        </Content>
      </ContentBlock>
    </SectionContainer>
  );
};

export default HomeSection2;