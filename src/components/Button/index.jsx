import { ButtonContainer } from "./styles"
function Button({value, onClick}) {
    return (
      <ButtonContainer onClick={onClick}>
        {value}
      </ButtonContainer>
    );
  }
  
  export default Button;