import React from 'react';
import styled from 'styled-components';
import TextBlock from '../../common/TextBlock';
import s3_b1_i1 from '../../../assets/images/AboutUsImages/s3-b1-i1.png';
import s3_b2_i1 from '../../../assets/images/AboutUsImages/s3-b2-i1.png';
import s3_b2_i2 from '../../../assets/images/AboutUsImages/s3-b2-i2.png';

const SectionContainer = styled.section`
  width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftBlock = styled.div`
  width: 960px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TopSection = styled.div`
  align-self: stretch;
  height: 480px;
  position: relative;
  background: white;
`;

const BottomSection = styled.div`
  align-self: stretch;
  height: 480px;
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

const ContentWrapper = styled.div`
  width: 800px;
  position: absolute;
  left: 77px;
  top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 22px;
`;

const TitleSection = styled.div`
  align-self: stretch;
  height: 60px;
  padding-top: 60px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

const TitleWrapper = styled.div`
  width: 740px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const TitleUnderline = styled.div`
  width: 40px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue};
`;

const Title = styled.div`
  color: black;
  font-size: 32px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 800;
  line-height: 32px;
`;

const DescriptionWrapper = styled.div`
  align-self: stretch;
  height: 196px;
  padding: 90px 10px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const Description = styled.div`
  width: 780px;
  color: #1A1917;
  font-size: 24px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 24px;
`;

const RightBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
`;

const TallImageLeft = styled.div`
  width: 480px;
  height: 960px;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
`;

const SmallImageTopRight = styled.div`
  width: 480px;
  height: 480px;
  position: absolute;
  left: 480px;
  top: 0;
  overflow: hidden;
`;

const SmallImageBottomRight = styled.div`
  width: 480px;
  height: 480px;
  position: absolute;
  left: 480px;
  top: 480px;
  overflow: hidden;
`;

const AboutSection3 = () => {
  return (
    <SectionContainer>
      {/* Ľavý blok */}
      <LeftBlock>
        {/* Hore - biely obsah */}
        <TopSection>
          <ContentWrapper>
            <TitleSection>
              <TitleWrapper>
                <TitleUnderline />
                <Title>Kde sa rodili legendy a stále sa píšu nové</Title>
              </TitleWrapper>
            </TitleSection>
            
            <DescriptionWrapper>
              <Description>
                Zbojnícka chata bola postavená v roku 1948 ako útočisko pre horolezcov 
                a turistov. Dodnes je najvyššie položenou chatou s celoročnou prevádzkou 
                vo Vysokých Tatrách. Žiadna cesta autom, žiadny signál – len čistá príroda 
                a ticho, ktoré sa nedá kúpiť.
              </Description>
            </DescriptionWrapper>
          </ContentWrapper>
        </TopSection>

        {/* Dole - obrázok */}
        <BottomSection>
          <PlaceholderBg />
          <Image src={s3_b1_i1} alt="Chata" />
        </BottomSection>
      </LeftBlock>

      {/* Pravý blok */}
      <RightBlock>
        {/* Vľavo vysoký obrázok */}
        <TallImageLeft>
          <PlaceholderBg />
          <Image src={s3_b2_i1} alt="Tall image" />
        </TallImageLeft>

        {/* Hore vpravo - TextBlock */}
        <SmallImageTopRight>
            <TextBlock
                subtitle="Prečo práve"
                title="Zbojnícka"
                dark={false}
                description={
                <>
                    <ul style={{ margin: '0 0 0 20px', padding: 0, listStyleType: 'disc', fontSize: '24px' }}>
                    <li>Žiadny signál → skutočný oddych</li>
                    <li>26 plies na dosah</li>
                    <li>Domáca kuchyňa a pivo</li>
                    <li>Miesto, kde sa rodia priateľstvá</li>
                    </ul>
                </>
                }
            />
        </SmallImageTopRight>

        {/* Dole vpravo - obrázok */}
        <SmallImageBottomRight>
          <PlaceholderBg />
          <Image src={s3_b2_i2} alt="Small image" />
        </SmallImageBottomRight>
      </RightBlock>
    </SectionContainer>
  );
};

export default AboutSection3;