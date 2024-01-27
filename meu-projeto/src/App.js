import './index.js';
import { Container, Content, Row, Column } from './style.js';
import Input from './components/Input/index.js';
import Button from './components/Button/index.js';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}  ${number}`);
  };
  
  const handleSumNumbers = () => {
    setOperation('+')
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    
    }
  };

  const handleMinNumbers = () => {

    setOperation('-')
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0');
    } else {
      const min = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(min));
    }
  }

  const handleMultNumbers = () => {
    setOperation('x');
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
    }
  }

  const handleDivNumbers = () => {
    setOperation('/');
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
    }
  }

  const handleEquals = () => {

    if (firstNumber != '0' && operation != '' && currentNumber != '0') {
     switch(operation){
      case '+':
        handleSumNumbers();
        break;

      case '-':
        handleMinNumbers();
        break;
      case 'x':
        handleMultNumbers();
        break;
      case '/':
        handleDivNumbers();
      default: 
        break;
     }
    }
  };


  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };
  
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultNumbers} />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="X" onClick={() => handleAddNumber('X')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
