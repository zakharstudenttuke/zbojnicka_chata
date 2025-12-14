import React from 'react';
import styled from 'styled-components';
import s2_b1_i1 from '../../../assets/images/AboutUsImages/s2-b1-i1.png';

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

const QuoteSection = styled.div`
  width: 600px;
  position: absolute;
  left: 115px;
  top: 63px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`;

const Quote = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const QuoteText = styled.div`
  color: black;
  font-size: 48px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 48px;
  text-align: left;
`;

const QuoteAuthor = styled.div`
  padding-top: 30px;
  color: black;
  font-size: 20px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

const TimelineTop = styled.div`
  width: 800px;
  height: 3px;
  position: absolute;
  left: 80px;
  top: 290px;
  background: ${props => props.theme.colors.cerulean};
`;

const TimelineBottom = styled.div`
  width: 800px;
  height: 3px;
  position: absolute;
  left: 80px;
  top: 824px;
  background: ${props => props.theme.colors.cerulean};
`;

const TimelineItem = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const TimelineDot = styled.div`
  width: 64px;
  height: 64px;
  background: white;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.colors.cerulean};
  flex-shrink: 0;
  align-content: center;
  text-align: center;
`;

const TimelineYear = styled.div`
  color: ${props => props.theme.colors.deepSpaceBlue};
  font-size: 20px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 600;
  line-height: 20px;
  flex-shrink: 0;
`;

const TimelineContent = styled.div`
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 42px;
`;

const TimelineText = styled.div`
  color: ${props => props.theme.colors.deepSpaceBlue};
  font-size: 24px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 24px;
`;

const BottomText = styled.div`
  padding: 10px;
  position: absolute;
  left: 103px;
  top: 841px;
  color: #0A3D3A;
  font-size: 24px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 24px;
`;

const AboutSection2 = () => {
  const timelineEvents = [
    {
      year: '1907',
      text: 'Poľovnícka útulňa v doline. Začiatok zbojníckej histórie.',
      left: 80,
      top: 345
    },
    {
      year: '1933',
      text: 'Prestavba na plnohodnotnú chatu. Celoročná prevádzka.',
      left: 164,
      top: 435
    },
    {
      year: '1986',
      text: 'Veľká rekonštrukcia. Nový život po uzavretí.',
      left: 248,
      top: 525
    },
    {
      year: '1998',
      text: 'Požiar zničil všetko. Ale duch prežil.',
      left: 332,
      top: 615
    },
    {
      year: '2001',
      text: 'Nové otvorenie. Silnejšia než predtým.',
      left: 416,
      top: 705
    }
  ];

  return (
    <SectionContainer>
      {/* Ľavý blok - Obrázok */}
      <ImageBlock>
        <PlaceholderBg />
        <Image src={s2_b1_i1} alt="Historical photo" />
      </ImageBlock>

      {/* Pravý blok - Timeline */}
      <ContentBlock>
        {/* Citát */}
        <QuoteSection>
          <Quote>
            <QuoteText>
              «Kto neprešiel Prielom, ten Tatry nevidel.»
            </QuoteText>
          </Quote>
          <QuoteAuthor>
            - Jozef Psotka, prvý Slovák na Evereste <br />(alebo: starý chatár Ján Šimko)
          </QuoteAuthor>
        </QuoteSection>

        {/* Timeline čiary */}
        <TimelineTop />
        <TimelineBottom />

        {/* Timeline udalosti */}
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} left={event.left} top={event.top}>
            <TimelineDot>
              <TimelineYear>{event.year}</TimelineYear>
            </TimelineDot>
            <TimelineContent>
              <TimelineText>{event.text}</TimelineText>
            </TimelineContent>
          </TimelineItem>
        ))}

        {/* Dolný text */}
        <BottomText>
          Zbojnícka chata – kde sa píšu príbehy <br />od 1907. Príďte a staňte sa ich súčasťou.
        </BottomText>
      </ContentBlock>
    </SectionContainer>
  );
};

export default AboutSection2;