import React from 'react';
import styled from 'styled-components';
import TextBlock from '../../common/TextBlock';
import ImageBlock from '../../common/ImageBlock';
import s2_b1_i1 from '../../../assets/images/AccommodationImages/s2-b1-i1.png';
import s2_b1_i2 from '../../../assets/images/AccommodationImages/s2-b1-i2.png';
import s2_b2_i1 from '../../../assets/images/AccommodationImages/s2-b2-i1.png';

const SectionContainer = styled.section`
  width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  overflow: hidden;
`;

const AccommodationSection2= () => {
  return (
    <SectionContainer>
      {/* Ľavý blok */}
      <LeftBlock>
        {/* Hore vľavo - Text */}
        <TextBlock
          subtitle="Ideálne ubytovanie na 1960 m"
          title="Zbojnícka chata"
          description="Na Zbojníckej chate si vyberiete, čo vám viac vyhovuje – klasické horské spanie na palandách v spoločných izbách alebo útulné 2–6 lôžkové izby s výhľadom priamo na pleso a Prielom. Žiadny signál, žiadny ruch. Len drevo, teplé deky a pocit, že ste naozaj v srdci Tatier."
          subtitleSize="24px"
          titleSize="24px"
          gap="35px"
        />

        {/* Hore vpravo - Obrázok */}
        <ImageBlock 
          src={s2_b1_i1}
          placeholderColor="#AE7373"
        />

        {/* Dole vľavo - Obrázok */}
        <ImageBlock 
          src={s2_b1_i2}
          placeholderColor="#AE7373"
        />

        {/* Dole vpravo - Text */}
        <TextBlock
          subtitle="Polievka a pivo s výhľadom"
          title="Domáca kuchyňa, ktorá vás postaví na nohy"
          description="Na 1960 metroch sa varí poctivo a z lokálnych surovín – hustá cesnačka, tatranský guľáš, domáci chlieb, bylinkový čaj z vlastných bylín a studené pivo, ktoré chutí najlepšie na svete. Raňajky od 7:30, večera do 20:30. Platba len v hotovosti. Jedlo, ktoré vás zahreje a dodá silu na ďalší výstup."
          subtitleSize="24px"
          titleSize="24px"
          gap="35px"
        />

      </LeftBlock>

      {/* Pravý blok - Velka obrazovka */}
      <RightBlock>

        <ImageBlock 
          src={s2_b2_i1}
          placeholderColor="#AE7373"
        />
    
      </RightBlock>
    </SectionContainer>
  );
};

export default AccommodationSection2;