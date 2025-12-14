import styled from 'styled-components';
import Month from './Month';

const CalendarWrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const Calendar = ({ arrivalDate, departureDate, onChange }) => {
  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const handleDateSelect = (selectedDate) => {
    if (!arrivalDate || (arrivalDate && departureDate)) {
      onChange(selectedDate, null);
      return;
    }

    if (selectedDate > arrivalDate) {
      onChange(arrivalDate, selectedDate);
    } else {
      onChange(selectedDate, arrivalDate);
    }
  };

  return (
    <CalendarWrapper>
      <Month
        date={currentMonth}
        arrivalDate={arrivalDate}
        departureDate={departureDate}
        onDateSelect={handleDateSelect}
      />
    </CalendarWrapper>
  );
};

export default Calendar;
