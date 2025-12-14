import styled from 'styled-components';

const Box = styled.div`
  width: 445px;
  height: 100px;
  background: #EBEBEB;
  border-radius: 7px;
  padding: 10px 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.div`
  font-family: 'Montserrat';
  font-size: 13px;
  font-weight: 500;
  color: #003249;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Label = styled.div`
  width: 175px;
  font-size: 18px;
  font-weight: 700;
  color: #003249;
  text-align: center;
`;

const Value = styled.div`
  width: 47px;
  font-size: 18px;
  font-weight: 700;
  color: #003249;
  text-align: center;
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: 2px solid #003249;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const PeopleCounter = ({ title, label, value, min = 0, max = 10, onChange }) => {
  return (
    <Box>
      <Title>{title}</Title>

      <Row>
        <Label>{label}</Label>

        <Button onClick={() => onChange(value - 1)} disabled={value <= min}>
          −
        </Button>

        <Value>{value}</Value>

        <Button onClick={() => onChange(value + 1)} disabled={value >= max}>
          +
        </Button>
      </Row>
    </Box>
  );
};

export default PeopleCounter;
