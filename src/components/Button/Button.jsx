import { ButtonStyled } from "./styles";

const Button = ({ disabled = false, children, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
