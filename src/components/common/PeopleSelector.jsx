import styled from 'styled-components';
import PeopleCounter from './PeopleCounter';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 64px;
  padding: 10px;
`;

const PeopleSelector = ({ adults, children, setAdults, setChildren }) => {
  return (
    <Wrapper>
      <PeopleCounter
        title="Počet ľudí"
        label="Počet dospelých"
        value={adults}
        min={1}
        max={10}
        onChange={setAdults}
      />

      <PeopleCounter
        title="Počet ľudí"
        label="Počet detí"
        value={children}
        min={0}
        max={10}
        onChange={setChildren}
      />
    </Wrapper>
  );
};

export default PeopleSelector;
