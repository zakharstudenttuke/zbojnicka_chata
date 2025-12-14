import styled from 'styled-components';
import DayCell from './DayCell';

const Container = styled.div`
  width: 630px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 16px;
  font-family: Inter;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid rgba(0,0,0,0.07);
`;

const WeekDays = ['MO','TU','WE','TH','FR','SA','SU'];

const Month = ({ date, arrivalDate, departureDate, onDateSelect }) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday first
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];

  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  while (cells.length % 7 !== 0) cells.push(null);

  const isSelected = (day) => {
    if (!day) return false;

    const cellDate = new Date(year, month, day);

    if (arrivalDate && departureDate) {
      return cellDate >= arrivalDate && cellDate <= departureDate;
    }
    if (arrivalDate) return cellDate.getTime() === arrivalDate.getTime();

    return false;
  }

  return (
    <Container>
      <Header>
        <strong>{date.toLocaleString('en', { month: 'long' })}</strong>
        <span>{year}</span>
      </Header>

      <Grid>
        {WeekDays.map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: 10, opacity: .5 }}>{d}</div>
        ))}

        {cells.map((day, i) => (
          <DayCell 
            key={i} 
            day={day} 
            selected={isSelected(day)}
            onClick={(day) => {
              const clickedDate = new Date(year, month, day);
              onDateSelect(clickedDate);
            }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Month;
