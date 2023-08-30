import { FilterStyled, FilterTitle } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterStyled>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      ></input>
    </FilterStyled>
  );
};
