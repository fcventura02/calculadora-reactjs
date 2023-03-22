import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const handleAddNumber = (number)=>{
    if(firstNumber === '0' && operation !== ""){
      setFirstNumber(currentNumber)
      setCurrentNumber("0")
    }   
    setCurrentNumber(prev => `${prev === '0' ? '': prev}${number}`)
  }
  const handleClearNumber = ()=>{
    setCurrentNumber("0")
    setFirstNumber("0")
    setOperation("")
  }
  const handleSumNumber = ()=>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation("+");
      setCurrentNumber("0")
      return
    }

    const sum  = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(`${sum}`)
    setFirstNumber("0");
  }
  const handleSubtractNumber = ()=>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation("-");
      setCurrentNumber("0")
      return
    }

    const subtract  = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(`${subtract}`)
    setFirstNumber("0");
  }
  const handleMultNumber = ()=>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation("x");
      setCurrentNumber("0")
      return
    }

    const mult  = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(`${mult}`)
    setFirstNumber("0");
  }
  const handleDivisionNumber = ()=>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation("/");
      setCurrentNumber("0")
      return
    }

    const division  = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(`${division}`)
    setFirstNumber("0");
  }
  const handleEquals = ()=>{
    if (!firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+': handleSumNumber()
          break;
        case '-': handleSubtractNumber()
          break;
        case 'x': handleMultNumber()
          break;
        case '/': handleDivisionNumber()
          break;
        default: break;
      }
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button value="0" onClick={()=> handleAddNumber("0")}/>
          <Button value="c" onClick={()=> handleClearNumber()}/>
          <Button value="/" onClick={()=> handleDivisionNumber()}/>
          <Button value="x" onClick={()=> handleMultNumber()}/>
        </Row>
        <Row>
          <Button value="7" onClick={()=> handleAddNumber("7")}/>
          <Button value="8" onClick={()=> handleAddNumber("8")}/>
          <Button value="9" onClick={()=> handleAddNumber("9")}/>
          <Button value="-" onClick={()=> handleSubtractNumber()}/>
        </Row>
        <Row>
          <Button value="4" onClick={()=> handleAddNumber("4")}/>
          <Button value="5" onClick={()=> handleAddNumber("5")}/>
          <Button value="6" onClick={()=> handleAddNumber("6")}/>
          <Button value="+" onClick={()=> handleSumNumber()}/>
        </Row>
        <Row>
          <Button value="1" onClick={()=> handleAddNumber("1")}/>
          <Button value="2" onClick={()=> handleAddNumber("2")}/>
          <Button value="3" onClick={()=> handleAddNumber("3")}/>
          <Button value="=" onClick={()=> handleEquals()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
