import React from 'react'
import './App.css'

function App() {
  const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [pendingOperation, setPendingOperation] = useState(null);
    const [pendingValue, setPendingValue] = useState(null);
    const [completeOperation, setCompleteOperation] = useState('');
  
    const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operations = ['+', '-', '*', '/'];
  
    const handleClick = (val) => {
      setCurrentValue(prevValue => {
        if (prevValue === '0') {
          return val;
        } else {
          return prevValue + val;
        }
      });
      setCompleteOperation(prevOperation => prevOperation + val);
  };
  
  const handleOperation = (operation) => {
    setCompleteOperation(currentValue + " " + operation);
    setPendingOperation(operation);
    setPendingValue(currentValue);
    setCurrentValue('0');
  };
  
  const handleCalculate = () => {
  if (!pendingOperation || !pendingValue) {
    return;
  }
  
  const num1 = parseFloat(pendingValue);
  const num2 = parseFloat(currentValue);
  
  let result;
  
  switch (pendingOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        setCurrentValue("Error");
        setCompleteOperation("Error");
        setPendingOperation(null);
        setPendingValue(null);
        return;
      }
      break;
    default:
      return;
  }
  
  setCompleteOperation(pendingValue + " " + pendingOperation + " " + currentValue + " = " + result);
  setCurrentValue(result.toString());
  setPendingOperation(null);
  setPendingValue(null);
  };
  
    
  
    const handleClear = () => {
      setCurrentValue('0');
      setPendingOperation(null);
      setPendingValue(null);
      setCompleteOperation('');
    };
  
  
  return (
    <body>
      
    <div className="calculatebody">
      <div id="tela1">S310</div>
      <div id='telaprinc_pai'>
        <div id="telaprinc">0</div>
      </div>
      <div className="corpocalculadora">
        <ul>
          <button id='AC'className='calculate'>AC</button>
          <button id='um_calcul'className='calculate'>1</button>
          <button id='dois_calcul'className='calculate'>2</button>
          <button id='tres_calcul'className='calculate'>3</button>
        </ul>
        <ul>
          <button id='quatro_calcul'className='calculate'>4</button>
          <button id='cinco_calcul'className='calculate'>5</button>
          <button id='seis_calcul'className='calculate'>6</button>
          <button id='sete_calcul'className='calculate'>7</button>
        </ul>
        <ul>
          <button id='oito_calcul'className='calculate'>8</button>
          <button id='nove_calcul'className='calculate'>9</button>
          <button id='zero_calcul'className='calculate'>0</button>
          <button id='mais_calcul'className='calculate'>+</button>
        </ul>
        <ul>
          <button id='menos_calcul'className='calculate'>-</button>
          <button id='divisao_calcul'className='calculate'>/</button>
          <button id='multipulca_calcul'className='calculate'>*</button>
          <button id='igual_calcul'className='calculate'>=</button>
        </ul>
      </div>

    </div>
    </body>
  )
}
}


export default App
