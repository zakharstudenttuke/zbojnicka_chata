import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import TextBlock from '../../common/TextBlock';
import ImageBlock from '../../common/ImageBlock';
import s1_b1_i1 from '../../../assets/images/ContactImages/s1-b1-i1.png';
import s1_b1_i2 from '../../../assets/images/ContactImages/s1-b1-i2.png';
import s1_b2_i1 from '../../../assets/images/ContactImages/s1-b2-i1.png';
import s1_b2_i2 from '../../../assets/images/ContactImages/s1-b2-i2.png';

const SectionContainer = styled.section`
  width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
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

const TallImageRight = styled.div`
  width: 480px;
  height: 960px;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
`;

const TextTopLeft = styled.div`
  width: 480px;
  height: 480px;
  position: absolute;
  right: 480px;
  top: 0;
  overflow: hidden;
`;

const SmallImageBottomLeft = styled.div`
  width: 480px;
  height: 480px;
  position: absolute;
  right: 480px;
  top: 480px;
  overflow: hidden;
`;

const ContactSection1= () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      {/* Ľavý blok */}
      <LeftBlock>
        {/* Hore vľavo - Text */}
        <TextBlock
          subtitle="Lokalita"
          title="v srdci divokých Tatier"
          description="Najvyššie položená chata s celoročnou prevádzkou vo Vysokých Tatrách. Stojíme uprostred Veľkej Studenej doliny, obklopení 26 plesami, Jahňacím štítom a Prielomom. Žiadna lanovka, žiadna cesta autom – len 3,5–4,5 hodiny pešo modrou značkou z Tatranskej Lomnice alebo Starého Smokovca. Prídete unavení, odchádzate nabití. Toto miesto lieči."
          ctaText="Ako sa dostať k nám"
          subtitleSize="24px"
          titleSize="24px"
          gap="35px"
          onCtaClick={() => {navigate('/activities')}}
        />

        {/* Hore vpravo - Obrázok */}
        <ImageBlock 
          src={s1_b1_i1}
          placeholderColor="#AE7373"
        />

        {/* Dole vľavo - Obrázok */}
        <ImageBlock 
          src={s1_b1_i2}
          placeholderColor="#AE7373"
        />

        {/* Dole vpravo - Text */}
        <TextBlock
          subtitle="Chatár a strážca Zbojníckej"
          title="Miki Knižka"
          description="Pozná každý kameň v Prielome, každú cestu na hrebene aj všetky príbehy, ktoré sa tu za roky narodili. Poradí najlepší výstup podľa počasia, naleje vám čaj o tretej ráno pred túrou a večer pri peci rozpovie, ako prežil lavínu v 87-om. Na Zbojníckej nie je personál – je tu rodina. A vy sa stanete jej súčasťou hneď po prvom „dobrý večer“."
          subtitleSize="24px"
          titleSize="24px"
          gap="35px"
        />

      </LeftBlock>

      {/* Pravý blok - Velka obrazovka */}
      <RightBlock>

        {/* Hore vlavo - TextBlock */}
        <TextTopLeft>
            <TextBlock
                subtitle="Dostupní"
                title="Kontaktujte Nás"
                dark={true}
                description={
                <>
                    <ul style={{ margin: '0 0 0 20px', padding: 0, listStyleType: 'disc', fontSize: '18px' }}>
                    <li>Telefón: +421 903 638 000</li>
                    <li>Rezervácie: rezervacie@zbojnickachata.sk</li>
                    <li>Email: zbojnickehochata@gmail.com</li>
                    </ul>
                </>
                }
            />
        </TextTopLeft>

        {/* Dole vlavo - obrázok */}
        <SmallImageBottomLeft>
          <Image src={s1_b2_i1} alt="Small image" />
        </SmallImageBottomLeft>

        {/* Vpravo vysoký obrázok */}
        <TallImageRight>
          <Image src={s1_b2_i2} alt="Tall image" />
        </TallImageRight>

      </RightBlock>
    </SectionContainer>
  );
};

export default ContactSection1;