// src/pages/ReservationPage.jsx
import styled from 'styled-components';
import { useState } from 'react';
import ReservationHeader from '../../components/layout/Reservation/ReservationHeader';
import ReservationTabBar from '../../components/layout/Reservation/ReservationTabBar';
import ReservationDateHeader from '../../components/layout/Reservation/ReservationDateHeader';
import Calendar from '../../components/common/Calendar';
import PeopleSelector from '../../components/common/PeopleSelector';
import PriceSummary from '../../components/common/PriceSummary';

const PageContainer = styled.div`
  width: 1920px;
  min-height: 80px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContentArea = styled.div`
  width: 1440px;
  height: 490px;
  min-height: 500px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
`;

const FloatingPriceSummary = styled.div`
  position: absolute;
  top: 150px;
  right: 80px;
  width: 250px; // можна змінити ширину
  z-index: 10;
`;


const DatesPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);


  return (
    <PageContainer>
      <ReservationHeader/>

      <ReservationTabBar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />

      <ReservationDateHeader 
        arrivalDate={arrivalDate}
        departureDate={departureDate}
        step={activeTab + 1}
        />

      <ContentArea>
       <Calendar
            arrivalDate={arrivalDate}
            departureDate={departureDate}
            onChange={(selectedDate) => {
                if (!arrivalDate) {
                    // Вибираємо першу дату — завжди arrival
                    setArrivalDate(selectedDate);
                    setDepartureDate(null);
                } else if (!departureDate) {
                    // Вибираємо другу дату — departure
                    if (selectedDate >= arrivalDate) {
                        setDepartureDate(selectedDate);
                    } else {
                        // Якщо вибрали меншу дату — робимо її arrival, а попередню arrival робимо departure
                        setDepartureDate(arrivalDate);
                        setArrivalDate(selectedDate);
                    }
                } else {
                    // Якщо обидві дати вже є — починаємо новий вибір
                    setArrivalDate(selectedDate);
                    setDepartureDate(null);
                }
            }}
        />

      <FloatingPriceSummary>
        <PriceSummary
          nights={arrivalDate && departureDate ? Math.ceil((departureDate - arrivalDate) / (1000 * 60 * 60 * 24)) : 1}
        />
      </FloatingPriceSummary>

      <PeopleSelector
        adults={adults}
        children={children}
        setAdults={setAdults}
        setChildren={setChildren}
      />
      </ContentArea>
    </PageContainer>
  );
};

export default DatesPage;