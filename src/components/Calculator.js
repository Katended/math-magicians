const CalcBody = () => (
  <section>
    <div className="container">
      <div className="button">0</div>
      <div className="calculator-left">
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

const Calculator = () => (
  <div>
    <CalcBody />
  </div>
);

export default Calculator;