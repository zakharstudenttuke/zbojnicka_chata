import styled from 'styled-components';

const TabBarWrapper = styled.div`
  width: 700px;
  height: 60px;
  background: #101418;
  border-radius: 15px;
  display: flex;
  overflow: hidden;
`;

const Tab = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.active ? '#CCDBDC' : '#101418'};
  color: ${props => props.active ? 'black' : 'white'};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: ${props => props.active ? 500 : 400};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0px 0px 50px #1D1D1D' : 'none'};

  &:hover {
    background: ${props => props.active ? '#CCDBDC' : '#22262A'};
  }
`;

const ReservationTabBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    'Vyber datumu',
    'Doplnkové služby',
    'Vaše Údaje',
    'Platba'
  ];

  return (
    <TabBarWrapper>
      {tabs.map((label, index) => (
        <Tab
          key={index}
          active={activeTab === index}
          onClick={() => onTabChange(index)}
        >
          {label}
        </Tab>
      ))}
    </TabBarWrapper>
  );
};

export default ReservationTabBar;