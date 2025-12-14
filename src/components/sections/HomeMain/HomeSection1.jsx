import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TextBlock from '../../common/TextBlock';
import ImageBlock from '../../common/ImageBlock';
import LargeTextWithImageBlock from '../../common/LargeTextWithImageBlock';
import s1_b1_i1 from '../../../assets/images/HomeImages/s1-b1-i1.png';
import s1_b1_i2 from '../../../assets/images/HomeImages/s1-b1-i2.png';
import s1_b2_i1 from '../../../assets/images/HomeImages/s1-b2-i1.png';

const SectionContainer = styled.section`
  width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  // @media (max-width: ${props => props.theme.breakpoints.desktop}) {
  //   flex-direction: column;
  // }
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
`;

const HomeSection1 = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      {/* Ľavý blok - 4 selekcie */}
      <LeftBlock>
        {/* Hore vľavo - Text */}
        <TextBlock
          subtitle="Celoročné ubytovanie:"
          title="Zažite Tatry v každom období"
          description="Večerný výhľad na Veľkú studenú dolinu je očarujúci v každom ročnom období. Rovnako magické je aj byť prvým dobrodruhom v doline pod lúčmi preberajúceho sa slnka."
          ctaText="Viac o ubytovaní"
          onCtaClick={() => navigate('/accommodation')}
          subtitleSize="24px"
          titleSize="24px"
          gap="35px"
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
        
        {/* Dole vpravo - Text (dark) */}
        <TextBlock
          subtitle="Stravovanie a nápoje:"
          title="Domáca kuchyňa"
          description="Počas dňa ponúkame výber teplých polievok, hlavných jedál a dezertov. Ďalej si môžete objednať aj raňajky a večeru. Pri dlhších pobytoch je jedálniček v rámci polpenzie rôznorodý. Náš nápojový lístok je taktiež bohatý – dobré pivo, čaj, víno, káva, nealko nápoje a ďalšie iné."
          ctaText="Zistiť viac"
          onCtaClick={() => navigate('/accommodation')}
          dark={true}
        />
      </LeftBlock>

      {/* Pravý blok - Veľký text s obrázkom */}
      <RightBlock>
        <LargeTextWithImageBlock
          subtitle="História a duša Tatier na jednom mieste"
          title="Zbojnícka chata"
          description="Postavená v roku 1948, na 1960 m n. m. vo Veľkej Studenej doline. Najvyššie položená chata vo Vysokých Tatrách s celoročnou prevádzkou. Miesto, kde sa stretávajú horolezci, turisti aj zbojnícke legendy. Žiadny signál, žiadna cesta autom – len čistá príroda a ticho, ktoré lieči."
          ctaText="Zistiť viac o chate"
          onCtaClick={() => {
            window.scrollTo(0, 0);
            navigate('/about');
          }}
          backgroundImage={s1_b2_i1}
        />
      </RightBlock>
    </SectionContainer>
  );
};

export default HomeSection1;