import { InputStyled } from "./styles";

const Input = ({ value, onChange }) => {
  return (
    <InputStyled
      value={value}
      onChange={onChange}
      type="search"
      placeholder="Search for a movie......"
    />
  );
};

export default Input;
