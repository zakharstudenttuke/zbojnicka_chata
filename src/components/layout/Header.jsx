import styled from 'styled-components';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';

const HeaderContainer = styled.header`
  width: 1920px;
  height: 100px;
  background: ${props => props.theme.colors.deepSpaceBlue};
  position: relative;
  padding: 0 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
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
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: ${props => props.$active ? props.theme.colors.frostedBlue2 : props.theme.colors.white};
  font-size: 18px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease;
  white-space: nowrap;
  
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
  color: ${props => props.active ? props.theme.colors.textGrey : props.theme.colors.textGreyLight};
  font-size: 14px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 500;
  line-height: 14px;
`;

const Header = () => {
  const location = useLocation();
  const [language, setLanguage] = useState('EN');

  const navItems = [
    { id: 'home', label: 'Hlavná stránka', path: '/' },
    { id: 'about', label: 'O nás', path: '/about' },
    { id: 'accommodation', label: 'Ubytovanie', path: '/accommodation' },
    { id: 'activities', label: 'Aktivity', path: '/activities' },
    { id: 'gallery', label: 'Galéria', path: '/gallery' },
    { id: 'contact', label: 'Kontakt', path: '/contact' },
    { id: 'reserve', label: 'Rezervovať', path: '/reserve' },
  ];

  return (
    <HeaderContainer>
      <Logo to="/">
        <img src={logoImage} alt="Zbojnícka chata logo" />
      </Logo>
      
      <Nav>
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            $active={location.pathname === item.path}
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