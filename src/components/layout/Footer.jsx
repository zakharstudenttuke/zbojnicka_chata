import styled from 'styled-components';
import { Facebook, Instagram, Mail } from 'lucide-react';
import logoImage from '../../assets/images/logo.png';

const FooterContainer = styled.footer`
  width: 1920px;
  background: ${props => props.theme.colors.deepSpaceBlue};
  padding: 66px 67px 66px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
`;

const LogoSection = styled.div`
  width: 360.68px;
  height: 290px;
  position: relative;
  flex-shrink: 0;
  
  img {
    width: 324.61px;
    height: 259.51px;
    margin-top: 14px;
    margin-left: 18px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '30px'};
  flex-shrink: 0;
`;

const ColumnTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.size || '14px'};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: ${props => props.size || '14px'};
  text-transform: uppercase;
`;

const ColumnText = styled.p`
  color: #807D79;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`;

const ContactInfo = styled.div`
  color: #807D79;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 24px;
  
  a {
    color: #807D79;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.frostedBlue2};
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F3F3F3;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.frostedBlue2};
    transform: scale(1.1);
  }
  
  svg {
    width: 48px;
    height: 48px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <img src={logoImage} alt="Zbojnícka chata" />
      </LogoSection>

      <FooterColumn gap="31px" style={{ width: '345px' }}>
        <ColumnTitle>KONTAKTUJTE NÁS</ColumnTitle>
        <ColumnText>
          Ostaňte v kontakte s nami pre aktuálne informácie, rezervácie, 
          a odpovede na vaše otázky. Naše kontaktné údaje sú:
        </ColumnText>
        <ContactInfo>
          Telefón: <a href="tel:+421903638000">+421 903 638 000</a>
          <br />
          Rezervácie: <a href="mailto:rezervacie@zbojnickachata.sk">
            rezervacie@zbojnickachata.sk
          </a>
          <br />
          Email: <a href="mailto:zbojnickehochata@gmail.com">
            zbojnickehochata@gmail.com
          </a>
        </ContactInfo>
      </FooterColumn>

      <FooterColumn gap="30px" style={{ width: '262px' }}>
        <ColumnTitle>SLEDUJTE NÁS</ColumnTitle>
        <ColumnText>
          Sledujte nás na sociálnych sieťach pre aktuálne informácie 
          o počasí, udalostiach a novinkách z Vysokých Tatier
        </ColumnText>
        <SocialIcons>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </SocialIcon>
          <SocialIcon href="mailto:zbojnickehochata@gmail.com">
            <Mail />
          </SocialIcon>
        </SocialIcons>
      </FooterColumn>

      <FooterColumn gap="26px" style={{ width: '289.74px' }}>
        <ColumnTitle size="16px">O nás</ColumnTitle>
        <ColumnText>
          Chata pri Zelenom plese ponúka ubytovanie a občerstvenie pre turistov 
          a horolezcov. Na chate je slabý telefónny signál, Wi-Fi nie je k dispozícii 
          a platby sú možné len v hotovosti.
        </ColumnText>
      </FooterColumn>
    </FooterContainer>
  );
};

export default Footer;