import styled, { css } from 'styled-components';

const Cell = styled.div`
  height: 80px;
  padding: 8px;
  border-right: 1px solid rgba(0,0,0,0.07);
  border-bottom: 1px solid rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;

  ${({ disabled }) =>
    disabled && css`
      opacity: 0.1;
      pointer-events: none;
    `}

  ${({ selected }) =>
    selected && css`
      background: #007EA7;
      color: white;
      font-weight: 700;
    `}
`;

const DayCell = ({ day, onClick, selected, disabled }) => {
  if (!day) return <Cell disabled />;

  return (
    <Cell onClick={() => onClick(day)} selected={selected} disabled={disabled}>
      <div>{day}</div>
      <div style={{ fontSize: 11 }}>
        20 <span style={{ fontSize: 8 }}>€</span>
      </div>
    </Cell>
  );
};

export default DayCell;
