import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';

function CalcFun() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  useEffect(() => {
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

    const divs = document.querySelectorAll('div.button,div.operator');

    divs.forEach((div) => {
      div.addEventListener('click', handleClick);
    });

    // Cleanup function to remove the event listener
    return () => {
      divs.forEach((div) => {
        div.removeEventListener('click', handleClick);
      });
    };
  }, [total, next, operation]);

  return (
    <section>
      <div className="container" id="container">
        <div className="result" id="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator-left" id="left">
          <div className="button">AC</div>
          <div className="button">+/-</div>
          <div className="button">%</div>
          <div className="button">7</div>
          <div className="button">8</div>
          <div className="button">9</div>
          <div className="button">4</div>
          <div className="button">5</div>
          <div className="button">6</div>
          <div className="button">1</div>
          <div className="button">2</div>
          <div className="button">3</div>
          <div className="button">0</div>
          <div className="button">.</div>
        </div>
        <div className="calculator-right">
          <div className="operator">+</div>
          <div className="operator">x</div>
          <div className="operator">-</div>
          <div className="operator">+</div>
          <div className="operator">=</div>
        </div>
      </div>
    </section>
  );
}

const Calculator = () => (
  <div>
    <CalcFun />
  </div>
);

export default Calculator;
