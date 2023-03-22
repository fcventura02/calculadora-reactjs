import { InputContainer } from "./styles"
function Input({value}) {
    return (
      <InputContainer>
        <input type="text" disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;