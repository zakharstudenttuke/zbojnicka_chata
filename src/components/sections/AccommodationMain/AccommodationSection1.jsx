import React from 'react';
import styled from 'styled-components';
import TextBlock from '../../common/TextBlock';
import ImageBlock from '../../common/ImageBlock';
import s1_b1_i1 from '../../../assets/images/AccommodationImages/s1-b1-i1.png';
import s1_b2_i1 from '../../../assets/images/AccommodationImages/s1-b2-i1.png';
import s1_b2_i2 from '../../../assets/images/AccommodationImages/s1-b2-i2.png';
import LargeTextWithImageBlock from '../../common/LargeTextWithImageBlock';
import { useNavigate } from 'react-router-dom';

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

const AccommodationSection1 = () => {
  const navigate = useNavigate();

  return (
    <SectionContainer>
      {/* Ľavý blok */}
      <LeftBlock>
        <LargeTextWithImageBlock
          subtitle="Spoznajte krásu Tatier"
          title="Zbojnícka chata 1960 m n. m."
          description="Najvyššie položená chata s celoročnou prevádzkou vo Vysokých Tatrách. Žiadna cesta autom. Žiadny signál. Len vy, 26 plies, kamzíky a výhľady, ktoré si zapamätáte navždy. Tu sa ráno budíte skôr ako budík, večer zaspávate pod najjasnejšími hviezdami a cez deň odchádzate rovno na hrebene. Miesta sú obmedzené a miznú rýchlo – najmä cez víkendy a sviatky."
          ctaText="Rezervovať teraz"
          onCtaClick={() => {
            window.scrollTo(0, 0);
            navigate('/reservation/dates');
          }}
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
          subtitle="Tradičná horská atmosféra"
          title="Spanie ako pred 70 rokmi – len lepšie"
          description="Drevené palandy, teplé deky a vôňa smreku. Presne tak, ako to má byť na najvyššej tatranskej chate. Žiadny luxus, žiadne Wi-Fi – len čistý oddych po celom dni v horách. Každé miesto má svoju históriu a každý, kto tu prespal, sa sem chce vrátiť."
          subtitleSize="24px"
          titleSize="24px"
          gap="35px"
        />

        {/* Dole vľavo - Text (dark) */}
        <TextBlock
          subtitle="Izba s výhľadom na štíty"
          title="Súkromie 1960 metrov nad všednými dňami"
          description="Ponúkame aj menšie 2–6 lôžkové izby priamo pri Zbojníckom plese. Ráno otvoríte okno a prvý pohľad patrí Jahňaciemu štítu a Prielomu. Ideálne pre páry, rodiny alebo malé partie, ktoré chcú zažiť Tatry naplno a v pokoji. Počet takýchto izieb je prísne obmedzený."
          ctaText="Rezervovať ubytovanie"
          onCtaClick={() => navigate('/reservation/dates')}
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

export default AccommodationSection1;