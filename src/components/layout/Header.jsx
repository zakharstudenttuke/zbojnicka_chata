import styled from 'styled-components';
import { useState } from 'react';
import logoImage from '../../assets/images/logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.deepSpaceBlue};
  position: relative;
  padding: 0 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  
  img {
    width: 90px;
    height: 72px;
    position: absolute;
    left: 5px;
    top: 14px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 45px;
`;

const NavLink = styled.a`
  color: ${props => props.active ? props.theme.colors.frostedBlue2 : props.theme.colors.white};
  font-size: 18px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.frostedBlue2};
  }
`;

const LanguageSwitcher = styled.div`
  width: 105px;
  height: 44px;
  padding: 8px 9px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  position: relative;
  cursor: pointer;
`;

const LanguageIndicator = styled.div`
  width: 44px;
  height: 28px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.10);
  border-radius: 8px;
`;

const LanguageText = styled.div`
  color: ${props => props.active ? props.theme.colors.textGreyLight : props.theme.colors.textGrey};
  font-size: 14px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 500;
  line-height: 14px;
`;

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [language, setLanguage] = useState('EN');

  const navItems = [
    { id: 'home', label: 'Hlavná stránka' },
    { id: 'about', label: 'O nás' },
    { id: 'accommodation', label: 'Ubytovanie' },
    { id: 'activities', label: 'Aktivity' },
    { id: 'gallery', label: 'Galéria' },
    { id: 'contact', label: 'Kontakt' },
    { id: 'reserve', label: 'Rezervovať' },
  ];

  return (
    <HeaderContainer>
      <Logo>
        <img src={logoImage} alt="Zbojnícka chata logo"/>
      </Logo>
      
      <Nav>
        {navItems.map(item => (
          <NavLink
            key={item.id}
            active={activeLink === item.id}
            onClick={() => setActiveLink(item.id)}
          >
            {item.label}
          </NavLink>
        ))}
        
        <LanguageSwitcher onClick={() => setLanguage(language === 'EN' ? 'SK' : 'EN')}>
          <LanguageIndicator />
          <LanguageText active={language === 'EN'}>EN</LanguageText>
          <LanguageText active={language === 'SK'} style={{position: 'absolute', left: 21, top: 15}}>
            SK
          </LanguageText>
        </LanguageSwitcher>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;