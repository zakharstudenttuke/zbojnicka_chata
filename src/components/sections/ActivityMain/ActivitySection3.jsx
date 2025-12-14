import React from 'react';
import styled from 'styled-components';
import { Map } from 'lucide-react';
import s3_b1_i1 from '../../../assets/images/ActivityImages/s3-b1-i1.png';
import s3_b2_i1 from '../../../assets/images/ActivityImages/s3-b2-i1.png';

const SectionContainer = styled.section`
  width: 1920px;
  height: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MapBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
  background: white;
  overflow: hidden;
`;

const MapBackground = styled.div`
  width: 960px;
  height: 960px;
  position: absolute;
  left: 0;
  top: 0;
  background: #D9D9D9;
`;

const MapImage = styled.img`
  width: 960px;
  height: 960px;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
`;

const MapButton = styled.button`
  width: 486px;
  height: 102px;
  position: absolute;
  left: 240px;
  top: 433px;
  background: ${props => props.theme.colors.cerulean};
  overflow: hidden;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.frostedBlue2};
    transform: scale(1.05);
  }
`;

const MapButtonText = styled.span`
  color: white;
  font-size: 25px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  line-height: 25px;
  text-align: center;
`;

const MapIcon = styled.div`
  width: 35px;
  height: 29px;
  color: #F3F3F3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherBlock = styled.div`
  width: 960px;
  height: 960px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = styled.div`
  width: 721px;
  height: 332px;
  position: absolute;
  left: 119px;
  top: 314px;
  background: #485974;
  border-radius: 20.16px;
  overflow: hidden;
`;

const WeatherImage = styled.img`
  width: 313.05px;
  height: 307.41px;
  position: absolute;
  left: 480.21px;
  top: 314px;
  object-fit: cover;
`;

const Temperature = styled.div`
  width: 160.06px;
  height: 113.40px;
  position: absolute;
  left: 131.75px;
  top: 353.62px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6.72px;
  
  span {
    color: white;
    font-size: 47.23px;
    font-family: 'Lucida Fax', serif;
    font-weight: 400;
    text-align: center;
  }
`;

const TempRange = styled.div`
  position: absolute;
  left: 131.75px;
  top: 498.44px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6.72px;
  
  span {
    color: #E1E1E1;
    font-size: 13.44px;
    font-family: 'Lucida Fax', serif;
    font-weight: 400;
    text-align: center;
  }
`;

const LocationName = styled.div`
  width: 419.53px;
  position: absolute;
  left: 129.38px;
  top: 567.32px;
  color: white;
  font-size: 18.81px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  text-align: center;
`;

const ActivitySection2 = () => {
  return (
    <SectionContainer>
      {/* Ľavý blok - Mapa */}
      <MapBlock>
        <MapBackground />
        <MapImage src={s3_b1_i1} alt="Mapa trasy" />
        
        <MapButton onClick={() => console.log('Zobraziť mapu clicked')}>
          <MapIcon>
            <Map size={29} strokeWidth={4} />
          </MapIcon>
          <MapButtonText>Zobraziť mapu</MapButtonText>
        </MapButton>
      </MapBlock>

      {/* Pravý blok - Počasie */}
      <WeatherBlock>
        <WeatherCard />
        <WeatherImage src={s3_b2_i1} alt="Weather illustration" />
        
        <Temperature>
          <span>17°</span>
        </Temperature>

        <TempRange>
          <span>L:18   </span>
          <span>H:24   </span>
        </TempRange>

        <LocationName>Jahňací Štít, SK</LocationName>
      </WeatherBlock>
    </SectionContainer>
  );
};

export default ActivitySection2;