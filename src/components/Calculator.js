import React, { useState } from 'react';
import calculate from '../logic/calculate';

function CalcFun() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (event) => {
    const res = calculate(
      {
        total,
        next,
        operation,
      }, event.target.innerText,
    );
    setNext(res.next);
    setTotal(res.total);
    setOperation(res.operation);
  };

  return (
    <section>
      <div className="container" id="container">
        <div className="result" id="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator-left" id="left">
          <button type="button" className="button" onClick={handleClick}>AC</button>
          <button type="button" className="button" onClick={handleClick}>+/-</button>
          <button type="button" className="button" onClick={handleClick}>%</button>
          <button type="button" className="button" onClick={handleClick}>7</button>
          <button type="button" className="button" onClick={handleClick}>8</button>
          <button type="button" className="button" onClick={handleClick}>9</button>
          <button type="button" className="button" onClick={handleClick}>4</button>
          <button type="button" className="button" onClick={handleClick}>5</button>
          <button type="button" className="button" onClick={handleClick}>6</button>
          <button type="button" className="button" onClick={handleClick}>1</button>
          <button type="button" className="button" onClick={handleClick}>2</button>
          <button type="button" className="button" onClick={handleClick}>3</button>
          <button type="button" className="button" onClick={handleClick}>0</button>
          <button type="button" className="button" onClick={handleClick}>.</button>
        </div>
        <div className="calculator-right">
          <button type="button" className="operator" onClick={handleClick}>+</button>
          <button type="button" className="operator" onClick={handleClick}>x</button>
          <button type="button" className="operator" onClick={handleClick}>-</button>
          <button type="button" className="operator" onClick={handleClick}>+</button>
          <button type="button" className="operator" onClick={handleClick}>=</button>
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  return (
    <div>
      <CalcFun />
    </div>
  );
}

export default Calculator;
