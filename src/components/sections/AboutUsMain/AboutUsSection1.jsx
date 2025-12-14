import React from 'react';
import styled from 'styled-components';
import s1_b1_i1 from '../../../assets/images/AboutUsImages/s1-b1-i1.png';
import s1_b2_i1 from '../../../assets/images/AboutUsImages/s1-b2-i1.png';

const SectionContainer = styled.section`
  width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
  background: white;
  overflow: hidden;
`;

const TitleUnderline = styled.div`
  width: 100px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue};
  position: absolute;
  left: 80px;
  top: 91.45px;
`;

const Title = styled.h2`
  width: 680px;
  position: absolute;
  left: 200px;
  top: 67px;
  color: black;
  font-size: 40px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 40px;
  margin: 0;
`;

const ContentWrapper = styled.div`
  height: 587px;
  position: absolute;
  left: 105px;
  top: 116px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Paragraph = styled.p`
  width: 750px;
  color: #1A1917;
  font-size: 24px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`;

const BottomImage = styled.img`
  width: 960px;
  height: 289px;
  position: absolute;
  left: 0;
  bottom: 0;
  object-fit: cover;
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

const AboutSection1 = () => {
  return (
    <SectionContainer>
      {/* Ľavý blok - Obsah */}
      <ContentBlock>
        <TitleUnderline />
        <Title>Máme vyše 100 rokov…</Title>
        
        <ContentWrapper>
          <Paragraph>
            História chaty vo Veľkej Studenej doline začala s postavením útulne pre 
            turistov a poľovníkov v roku 1907. Avšak už dávno pred tým dolinu navštevovali 
            pytliaci a lovci kamzíkov a svišťov. Po nich pravdepodobne dostali názov 
            Zbojnícke plesá a neskôr aj samotná Zbojnícka chata.
          </Paragraph>
          
          <Paragraph>
            Plány na prestavbu útulne a výstavbu chaty zmarila prvá svetová vojna a tak 
            sa turistická verejnosť dočkala riadnej chaty v našej doline až v priebehu 
            leta 1933, keď chatu výraznejšie prebudovali, rozšírili o krytú verandu a 
            uviedli do celoročnej prevádzky.
          </Paragraph>
          
          <Paragraph>
            Od roku 1983 bola chata pre rozsiahlu rekonštrukciu mimo prevádzky a úplne 
            vynovenú ju znovu otvorili 8. novembra 1986. Potom prišla tragédia v lete 1998…
          </Paragraph>
          
          <Paragraph>
            V noci 14. júna 1998, sa od prehriateho komína chytila strecha a napriek 
            všetkej snahe personálu o záchranu chaty, úplne zhorela. Zásluhou mnohých sa 
            chatu podarilo znovu postaviť a sprevádzkovať už za dva roky. Slávnostne ju 
            otvorili 20. októbra 2001 a od vtedy, len s malými zmenami, funguje dodnes.
          </Paragraph>
        </ContentWrapper>
        
        <BottomImage src={s1_b1_i1} alt="Historical image" />
      </ContentBlock>

      {/* Pravý blok - Obrázok */}
      <ImageBlock>
        <PlaceholderBg />
        <Image src={s1_b2_i1} alt="Zbojnícka chata" />
      </ImageBlock>
    </SectionContainer>
  );
};

export default AboutSection1;