import React from 'react';
import styled from 'styled-components';
import TextBlock from '../../common/TextBlock';
import ImageBlock from '../../common/ImageBlock';
import s2_b1_i1 from '../../../assets/images/ActivityImages/s2-b1-i1.png';
import s2_b1_i2 from '../../../assets/images/ActivityImages/s2-b1-i2.png';
import s2_b1_i3 from '../../../assets/images/ActivityImages/s2-b1-i3.png';

const SectionContainer = styled.section`
  width: 1920px;
  height: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftBlock = styled.div`
  width: 960px;
  height: 1440px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 480px);
  grid-template-rows: repeat(3, 480px);
`;

const RightBlock = styled.div`
  width: 960px;
  height: 1440px;
  padding: 0 47px;
  opacity: 0.9;
  background: white;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const StepperWrapper = styled.div`
  width: 831px;
  height: 1440px;
  padding: 10px 0;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const StepperContent = styled.div`
  width: 831px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const StepperTitle = styled.div`
  width: 499px;
  height: 98px;
  position: relative;
  overflow: hidden;
`;

const TitleTop = styled.div`
  width: 325px;
  height: 49px;
  position: absolute;
  left: 40px;
  top: 0;
  color: black;
  font-size: 45px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 45px;
  text-align: center;
`;

const TitleBottom = styled.div`
  width: 449px;
  height: 48px;
  position: absolute;
  left: 50px;
  top: 49px;
  color: black;
  font-size: 45px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 800;
  line-height: 45px;
  text-align: center;
`;

const TitleUnderline = styled.div`
  width: 106.02px;
  height: 1.5px;
  position: absolute;
  left: 12px;
  top: 25px;
  background: ${props => props.theme.colors.frostedBlue2};
`;

const StepsContainer = styled.div`
  width: 831px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

const StepItem = styled.div`
  width: 831px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32.88px;
  position: relative;
`;

const StepNumberWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4.11px;
  position: relative;
`;

const StepNumber = styled.div`
  width: 65.76px;
  height: 65.76px;
  position: relative;
  background: ${props => props.active ? 'transparent' : props.theme.colors.deepSpaceBlue};
  border-radius: 50%;
  border: ${props => props.active ? `2.06px solid ${props.theme.colors.deepSpaceBlue}` : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '${props => props.number}';
    color: ${props => props.active ? props.theme.colors.deepSpaceBlue : '#FCFCFC'};
    font-size: 32.88px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    line-height: 49.32px;
    text-align: center;
  }
`;

const InnerCircle = styled.div`
  width: 49.32px;
  height: 49.32px;
  position: absolute;
  left: 8.22px;
  top: 8.22px;
  background: ${props => props.theme.colors.deepSpaceBlue};
  border-radius: 50%;
  border: 2.06px solid ${props => props.theme.colors.deepSpaceBlue};
`;

const StepLine = styled.div`
  width: 3.08px;
  height: ${props => props.height || '100.24px'};
  position: absolute;
  left: 31.34px;
  top: 69.87px;
  background: ${props => props.theme.colors.deepSpaceBlue};
`;

const StepContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4.11px;
`;

const StepTitle = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 32.88px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  line-height: 41.10px;
`;

const StepDescription = styled.div`
  width: ${props => props.width || '732.36px'};
  color: rgba(0, 0, 0, 0.60);
  font-size: 28.77px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  line-height: 41.10px;
`;

const ActivitySection2 = () => {
  const steps = [
    {
      number: 1,
      title: 'Začiatok trasy pri Chate pri Zelenom plese',
      description: 'Od Chaty pri Zelenom plese sa vydajte po turistickej značke smerom na severovýchod. Sledujte zelenú turistickú značku, ktorá vás prevedie začiatkom doliny.',
      lineHeight: '100.24px'
    },
    {
      number: 2,
      title: 'Prejdite Dolinou Zeleného plesa',
      description: 'Pokračujte dolinou, kde budete mať výhľady na okolité vrcholy a samotné Zelené pleso. Táto časť trasy je pomerne rovinatá a vhodná na rozohriatie pred stúpaním.',
      lineHeight: '100.24px'
    },
    {
      number: 3,
      title: 'Stúpanie smerom na Červenú dolinku',
      description: 'Po chvíli trasa začne stúpať strmšie, keď sa približujete k Červenej dolinke. V tejto oblasti môžete obdivovať bohatú flóru a faunu, ktorá je charakteristická pre Vysoké Tatry.',
      lineHeight: '100.24px'
    },
    {
      number: 4,
      title: 'Pokračujte smerom na Kolový priechod',
      description: 'Po stúpaní k Červenej dolinke nasleduje náročnejší výstup na Kolový priechod. Toto je jedna z najstrmších častí trasy, kde budete potrebovať dobrú kondíciu a pevnú obuv.',
      lineHeight: '100.24px'
    },
    {
      number: 5,
      title: 'Posledný úsek na vrchol Jahňacieho štítu',
      description: 'Po dosiahnutí Kolového priechodu pokračujte po turistickej trase, ktorá vás dovedie až na samotný vrchol Jahňacieho štítu. Tento posledný úsek je technicky náročnejší.',
      lineHeight: '141.24px'
    },
    {
      number: 6,
      title: 'Vychutnajte si výhľad a oddýchnite si na vrchole',
      description: 'Na vrchole Jahňacieho štítu sa vám otvoria úžasné panoramatické výhľady. Zastavte sa, oddýchnite si a vychutnajte si krásu Tatier, než sa vydáte späť na zostup.',
      active: true,
      noLine: true
    }
  ];

  return (
    <SectionContainer>
      {/* Ľavý blok - Grid 2x3 */}
      <LeftBlock>
        {/* Riadok 1 */}
        <TextBlock
          subtitle="Upozornenie"
          title="pre Túru"
          description="Túra na Jahňací štít je vhodná pre skúsených turistov, pretože terén je miestami náročný a prevýšenie značné. Pred začiatkom túry sa uistite, že máte dostatočnú fyzickú kondíciu a správne vybavenie."
          ctaText="Viac o bezpečnosti"
          onCtaClick={() => console.log('Bezpečnosť clicked')}
          gap="5px"
        />
        
        <ImageBlock 
          src={s2_b1_i1}
          placeholderColor="#AE7373"
        />

        {/* Riadok 2 */}
        <ImageBlock 
          src={s2_b1_i2}
          placeholderColor="#AE7373"
        />

        <TextBlock
          subtitle="Ako určiť náročnosť"
          title="turistickej trasy"
          description="Sprievodca hodnotením turistických trás vám pomôže určiť úroveň náročnosti (od ľahkých až po veľmi náročné). K dispozícii sú detaily o vzdialenosti, prevýšení a teréne, ktoré vám umožnia vybrať trasu presne podľa vašich možností a záujmov."
          ctaText="Viac o náročnosťi"
          onCtaClick={() => console.log('Náročnosť clicked')}
          gap="5px"
        />

        {/* Riadok 3 */}
        <TextBlock
          subtitle="Turistická výbava"
          title="na výlet"
          description="Pripravte sa na váš výlet s našimi odporúčaniami pre turistickú výbavu. Od základného oblečenia a obuvi až po špeciálne vybavenie, pomôžeme vám zabezpečiť, že ste na každú trasu správne pripravení.Čo budete potrebovať na jednoduchú túru? Ako si správne zbaliť ruksak na náročnú trasu? Tipy na bezpečnosť v horskom teréne."
          ctaText="Pozrite si odporúčania"
          onCtaClick={() => console.log('Výbava clicked')}
          gap="5px"
        />

        <ImageBlock 
          src={s2_b1_i3}
          placeholderColor="#AE7373"
        />
      </LeftBlock>

      {/* Pravý blok - Stepper */}
      <RightBlock>
        <StepperWrapper>
          <StepperContent>
            <StepperTitle>
              <TitleUnderline />
              <TitleTop>Kroky</TitleTop>
              <TitleBottom>na výstup</TitleBottom>
            </StepperTitle>

            <StepsContainer>
              {steps.map((step, index) => (
                <StepItem key={index}>
                  <StepNumberWrapper>
                    <StepNumber number={step.number} active={step.active}>
                      {step.active && <InnerCircle />}
                    </StepNumber>
                    {!step.noLine && <StepLine height={step.lineHeight} />}
                  </StepNumberWrapper>

                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription width={index === 0 ? '732.36px' : 'auto'}>
                      {step.description}
                    </StepDescription>
                  </StepContent>
                </StepItem>
              ))}
            </StepsContainer>
          </StepperContent>
        </StepperWrapper>
      </RightBlock>
    </SectionContainer>
  );
};

export default ActivitySection2;