import { useState, useEffect } from 'react';
import Calculate from '../Logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import logic from '../Logic/DisplayLogic';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [operation, setOperation] = useState(null);
  const [next, setNext] = useState(null);
  const [result, setResult] = useState(null);
  const handleClick = (buttonName) => {
    const data = { total, operation, next };
    const result = Calculate(data, buttonName);
    setTotal(result.total);
    setOperation(result.operation);
    setNext(result.next);
  };

  useEffect(() => {
    const resultLogic = logic({ total, next, operation });
    setResult(resultLogic);
  }, [result, total, next, operation]);

  return (
    <>
      <div className="app">
        <h4 className="title-2 text-center">The Matrix Calculator</h4>
        <div>
          <Display result={result} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};
export default Calculator;
