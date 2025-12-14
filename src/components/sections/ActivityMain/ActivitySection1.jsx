import React from 'react';
import styled from 'styled-components';
import TextBlock from '../../common/TextBlock';
import ImageBlock from '../../common/ImageBlock';
import s1_b1_i1 from '../../../assets/images/ActivityImages/s1-b1-i1.png';
import s1_b2_i1 from '../../../assets/images/ActivityImages/s1-b2-i1.png';
import s1_b2_i2 from '../../../assets/images/ActivityImages/s1-b2-i2.png';
import LargeTextWithImageBlock from '../../common/LargeTextWithImageBlock';

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
  background: white;
  overflow: hidden;
`;

const RightBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 480px);
  grid-template-rows: repeat(2, 480px);
`;

const ActivitySection1 = () => {
  return (
    <SectionContainer>
      {/* Ľavý blok */}
      <LeftBlock>
        <LargeTextWithImageBlock
          subtitle="Výstup"
          title="na Jahňací štít (2 229 m)"
          description="Objavte krásu a výzvu, ktorú ponúka výstup na Jahňací štít. Táto celodenná túra začína priamo od Chaty pri Zelenom plese a vedie vás malebnou trasou až na vrchol s nezabudnuteľnými výhľadmi na Belianske Tatry. Trasa je ideálna pre skúsených turistov, ktorí si chcú vychutnať nádherné výhľady a tichú atmosféru Tatier."
          backgroundImage={s1_b1_i1}
        />
      </LeftBlock>

      {/* Pravý blok - 4 sekcie */}
      <RightBlock>

        {/* Hore vľavo - Obrázok */}
        <ImageBlock 
          src={s1_b2_i1}
          placeholderColor="#AE7373"
        />

        {/* Hore vpravo - Text */}
        <TextBlock
          subtitle="Detaily"
          title="turistickej trasy"
          description={
            <>
            Dĺžka trasy: 10 km<br/>
            Trvanie: 6 hodín<br/>
            Sezóna: Letná sezóna<br/>
            Ťažkosť: Z<br/>
            Prevýšenie: 960 m
            </>
          }
          subtitleSize="24px"
          titleSize="24px"
          gap="35px"
        />

        {/* Dole vľavo - Text (dark) */}
        <TextBlock
          subtitle="Čo vás čaká"
          title="na trase"
          description="Na tejto výnimočnej túre vás čakajú dychberúce panoramatické výhľady na Belianske Tatry a Dolinu Zeleného plesa, ktoré vám odhalia krásu a majestátnosť tatranskej prírody. Počas výstupu budete mať príležitosť obdivovať rozmanitú faunu a flóru, ktoré sú charakteristické pre toto jedinečné horské prostredie."
          dark={true}
        />
        
        {/* Dole vpravo - Obrázok */}
        <ImageBlock 
          src={s1_b2_i2}
          placeholderColor="#AE7373"
        />
    
      </RightBlock>
    </SectionContainer>
  );
};

export default ActivitySection1;