import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../../assets/images/logo.png';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #003249;
  padding: 5px 19px;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  position: absolute;
  left: 810px;
  top: 34px;
  transform: translate(-50%, -50%);
  width: 61px;
  height: 64px;

  img {
    width: 54.9px;
    height: 43.89px;
    margin-left: 3px;
    margin-top: 14px;
  }
`;

const Title = styled.div`
  text-align: center;
  color: white;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin: 4px 0 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const ReservationHeader = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo>
        <img src={logoImage} alt="Zbojnícka chata" />
      </Logo>
      <Title>
        <h1>Zbojnícka chata</h1>
        <p>rezervačný systém</p>
      </Title>
      <CloseButton onClick={() => {navigate('/')}}>×</CloseButton>
    </HeaderWrapper>
  );
};

export default ReservationHeader;