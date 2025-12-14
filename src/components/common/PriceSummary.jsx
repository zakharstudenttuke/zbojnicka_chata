import styled from 'styled-components';

const SummaryWrapper = styled.div`
  width: 100%;
  padding: 13px 11px;
  background: #D1D5DB;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Divider = styled.div`
  width: 100%;
  height: 0;
  outline: 1px #B8B9BB solid;
  outline-offset: -0.5px;
`;

const PriceSummary = ({ nights, pricePerNight = 20, discount = 20, cleaningFee = 2, serviceFee = 3, taxes = 5 }) => {
  const subtotal = nights * pricePerNight;
  const total = subtotal - discount + cleaningFee + serviceFee + taxes;

  return (
    <SummaryWrapper>
      <Row>
        <div>${pricePerNight} x {nights} noc</div>
        <div>${subtotal}</div>
      </Row>
      <Row>
        <div>KST zľava</div>
        <div style={{ color: '#DC2626' }}>-${discount}</div>
      </Row>
      <Row>
        <div>Poplatok za čistenie</div>
        <div>${cleaningFee}</div>
      </Row>
      <Row>
        <div>Servisný poplatok</div>
        <div>${serviceFee}</div>
      </Row>
      <Row>
        <div>Occupancy taxes and fees</div>
        <div>${taxes}</div>
      </Row>
      <Divider />
      <Row>
        <div style={{ fontWeight: 500 }}>Celkom</div>
        <div style={{ fontWeight: 500 }}>${total}</div>
      </Row>
    </SummaryWrapper>
  );
};

export default PriceSummary;
