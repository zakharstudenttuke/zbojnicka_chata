import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TextBlock from '../../common/TextBlock';
import ImageBlock from '../../common/ImageBlock';
import s3_b1_i1 from '../../../assets/images/HomeImages/s3-b1-i1.png';
import s3_b1_i2 from '../../../assets/images/HomeImages/s3-b1-i2.png';
import s3_b2_i1 from '../../../assets/images/HomeImages/s3-b2-i1.png';
import s3_b2_i2 from '../../../assets/images/HomeImages/s3-b2-i2.png';

const SectionContainer = styled.section`
  width: 1920px;
  position: relative;
  display: flex;
`;

const LeftBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 480px);
  grid-template-rows: repeat(2, 480px);
`;

const RightBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
`;

const RightBlockInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const TopLeftDark = styled.div`
  width: 480px;
  height: 480px;
  position: absolute;
  left: 0;
  top: 0;
`;

const BottomLeftImage = styled.div`
  width: 480px;
  height: 480px;
  position: absolute;
  left: 0;
  top: 480px;
  overflow: hidden;
`;

const RightTallImage = styled.div`
  width: 480px;
  height: 960px;
  position: absolute;
  left: 480px;
  top: 0;
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

const HomeSection3 = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      {/* Ľavý hlavný blok 960x960 */}
      <LeftBlock>
        {/* Hore vľavo - Obrázok */}
        <ImageBlock 
          src={s3_b1_i1}
          placeholderColor="#AE7373"
        />
        
        {/* Hore vpravo - Text (light) */}
        <TextBlock
          subtitle="Príchod na chatu"
          title="Žiadna cesta autom, len vlastné nohy"
          description="2–2,5 hodiny z Hrebienka alebo celý deň zo Starého Smokovca. Po ceste miniete vodopády, plesá a pravdepodobne aj kamzíkov."
          ctaText="Pozret trasu"
          onCtaClick={() => navigate("/activities")}
          gap="25px"
        />
        
        {/* Dole vľavo - Text (light) */}
        <TextBlock
          subtitle="Veľká Studená dolina"
          title="26 plies, kamzíky, ticho"
          description="Žiadne filtre. Žiadne davy. Len skutočné Tatry – divoké, čisté, nedotknuté. Každý deň iná obloha, každý krok iný výhľad."
          ctaText="Zobraziť galériu"
          onCtaClick={() => navigate("/gallery")}
          gap="5px"
        />
        
        {/* Dole vpravo - Obrázok */}
        <ImageBlock 
          src={s3_b1_i2}
          placeholderColor="#AE7373"
        />
      </LeftBlock>

      {/* Pravý hlavný blok 960x960 */}
      <RightBlock>
        <RightBlockInner>
          {/* Hore vľavo - Text (dark) */}
          <TopLeftDark>
            <TextBlock
              subtitle="Pre koho je Zbojnícka"
              title="Pre tých, čo chcú viac ako len nocľah"
              description="Tu neprídete na 'dovolenku'. Prídete, keď potrebujete vypnúť hlavu, nabrať silu a pocítiť, že ste nažive. Pre horolezcov, turistov, fotografov, pre každého, kto vie, že najlepšie veci sa získavajú ťažko."
              ctaText="Pozrieť ubytovanie a ceny"
              onCtaClick={() => navigate("/reservation/dates")}
              dark={true}
              gap="25px"
            />
          </TopLeftDark>

          {/* Dole vľavo - Obrázok */}
          <BottomLeftImage>
            <PlaceholderBg />
            <Image src={s3_b2_i1} alt="Image" />
          </BottomLeftImage>

          {/* Vpravo vysoký obrázok 480x960 */}
          <RightTallImage>
            <PlaceholderBg />
            <Image src={s3_b2_i2} alt="Tall Image" />
          </RightTallImage>
        </RightBlockInner>
      </RightBlock>
    </SectionContainer>
  );
};

export default HomeSection3;