import React from 'react';
import styled from 'styled-components';
import Cloudy from '../../../assets/images/HomeImages/cloudy.png';

const SectionContainer = styled.section`
  width: 1920px;
  height: 480px;
  position: relative;
  overflow: hidden;
  background: white;
`;

// Ľavý блок - Počasie
const WeatherBlock = styled.div`
  position: absolute;
  left: 63px;
  top: 68px;
`;

const WeatherTitle = styled.div`
  width: 248.42px;
  height: 55.65px;
  color: black;
  font-size: 45px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  line-height: 55.65px;
  margin-left: 129.7px;
`;

const WeatherUnderline = styled.div`
  width: 112.74px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue2};
  margin-top: 28.33px;
`;

const WeatherSubtitle = styled.div`
  width: 239.44px;
  height: 55.65px;
  color: black;
  font-size: 45px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 55.65px;
  margin-top: 0;
  margin-left: 42.9px;
`;

// Карточка погоди
const WeatherCard = styled.div`
  width: 432.02px;
  height: 191.22px;
  position: absolute;
  left: 455px;
  top: 221px;
  background: linear-gradient(153deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%);
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 1px solid white;
  backdrop-filter: blur(20px);
  overflow: hidden;
  position: relative; /* важливо для позиціонування дочірніх елементів */
`;

const WeatherCardBg = styled.div`
  width: 431px;
  height: 190.21px;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(46deg, #848CCF 0%, #B8BCE5 100%);
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

// Нове: зображення хмар
const WeatherCloudImage = styled.img`
  position: absolute;
  width: auto;
  height: auto;
  padding-top: 220px;
  padding-left: 250px;
  transform: translate(-50%, -50%);
  pointer-events: none; /* щоб не заважало клікам */
  user-select: none;
`;

const WeatherLocation = styled.div`
  position: absolute;
  left: 261px;
  top: 26px;
  color: white;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  z-index: 2;
`;

const WeatherDay = styled.div`
  width: 55.02px;
  height: 17.20px;
  position: absolute;
  left: 283.26px;
  top: 49.58px;
  color: white;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  z-index: 2;
`;

const WeatherTemp = styled.div`
  width: 66.23px;
  height: 44.52px;
  position: absolute;
  left: 283.26px;
  top: 80.94px;
  color: white;
  font-size: 36px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  z-index: 2;
`;

const WeatherTempF = styled.div`
  width: 49.93px;
  height: 19.22px;
  position: absolute;
  left: 283.26px;
  top: 124.45px;
  color: white;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  z-index: 2;
`;

const WeatherCondition = styled.div`
  width: auto;
  height: 19.22px;
  position: absolute;
  left: 35.66px;
  top: 26.31px;
  color: white;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  z-index: 2;
`;

// Pravý блок - Aktuálny stav (без змін)
const StatusBlock = styled.div`
  position: absolute;
  left: 960px;
  top: 68px;
`;

const StatusUnderline = styled.div`
  width: 112.74px;
  height: 2px;
  background: ${props => props.theme.colors.frostedBlue2};
  margin-top: 28.33px;
`;

const StatusTitle = styled.div`
  margin-top: 0;
  margin-left: 129.7px;
  color: black;
  font-size: 45px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
`;

const StatusSubtitle = styled.div`
  margin-top: 0;
  margin-left: 42.9px;
  color: black;
  font-size: 45px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
`;

const StatusInfo = styled.div`
  width: 666px;
  position: absolute;
  left: 1022px;
  top: 273px;
  color: black;
  font-size: 24px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
`;

const HomeSection5 = () => {
  return (
    <SectionContainer>
      {/* Ľavá časť - Počasie */}
      <WeatherBlock>
        <WeatherUnderline />
        <WeatherTitle>AKTUÁLNE</WeatherTitle>
        <WeatherSubtitle>POČASIE</WeatherSubtitle>
      </WeatherBlock>

      {/* Karta počasia */}
      <WeatherCard>
        <WeatherCardBg />
        
        {/* Ось тут вставляється зображення хмар */}
        <WeatherCloudImage src={Cloudy} alt="Weather clouds" />

        <WeatherCondition>Cloudy</WeatherCondition>
        <WeatherLocation>Zbojnícka chata, SK</WeatherLocation>
        <WeatherDay>Monday</WeatherDay>
        <WeatherTemp>20°</WeatherTemp>
        <WeatherTempF>68.9 F</WeatherTempF>
      </WeatherCard>

      {/* Pravá časť - Aktuálny stav */}
      <StatusBlock>
        <StatusUnderline />
        <StatusTitle>Aktuálny stav</StatusTitle>
        <StatusSubtitle>Chata OTVORENÁ</StatusSubtitle>
      </StatusBlock>

      <StatusInfo>
        Celoročná prevádzka • Posledná aktualizácia: dnes 14:20
      </StatusInfo>
    </SectionContainer>
  );
};

export default HomeSection5;