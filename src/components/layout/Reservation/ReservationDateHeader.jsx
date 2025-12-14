import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1070px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateBox = styled.div`
  width: 535px;
  height: 63px;
  background: #EBEBEB;
  border-radius: 3px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StepCircle = styled.div`
  position: absolute;
  left: 50%;

  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: #003249;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 35px;
  font-weight: 800;
`;

const Label = styled.div`
  color: #003249;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 500;
`;

const Value = styled.div`
  color: #003249;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

const ReservationDateHeader = ({ 
  arrivalDate, 
  departureDate, 
  step = 1 
}) => {
  return (
    <Wrapper>
      <DateBox>
        <Label>Dátum príchodu</Label>
        <Value>
          {arrivalDate
            ? arrivalDate.toLocaleDateString('sk-SK')
            : '--'}
        </Value>
      </DateBox>

      <StepCircle>{step}</StepCircle>

      <DateBox>
        <Label>Dátum odchodu</Label>
        <Value>
          {departureDate
            ? departureDate.toLocaleDateString('sk-SK')
            : '--'}
        </Value>
      </DateBox>
    </Wrapper>
  );
};

export default ReservationDateHeader;