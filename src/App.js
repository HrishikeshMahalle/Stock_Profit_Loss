import { useState } from "react";
import "./styles.css";

const App = () => {
  const [previous, setPrevious] = useState(0);
  const [number, setNumber] = useState(0);
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    if (e.target.id === "prev") {
      setPrevious(e.target.value);
    } else if (e.target.id === "count") {
      setNumber(e.target.value);
    } else {
      setCurrent(e.target.value);
    }
  };

  const clickHandler = () => {
    if (previous <= 0 || number <= 0 || current <= 0) {
      setText("Provided inputs should be grater than 0");
    } else {
      const then = Number(previous) * Number(number);
      const now = Number(current) * Number(number);
      let percent = (((now - then) / then) * 100).toFixed(2);

      if (percent === 0) {
        setText(`Percentage Gain: ${percent}% and Total Profit: ${now - then}`);
      } else if (percent > 0) {
        setText(
          `Percentage Gain: ${percent}% and Total Profit: ₹${now - then} 🤑🥳`
        );
      } else {
        setText(
          `Percentage Loss: ${Math.abs(percent)}% and Total Loss: ₹${Math.abs(
            now - then
          )} 😞😞`
        );
      }
    }
  };

  return (
    <div className="container">
      <div className="headings">
        <h1>Profit/Loss ?</h1>
        <h1>How Much ?</h1>
      </div>
      <div className="inputs">
        <div className="number flex">
          <h4>Price per stock at the time of purchase: </h4>
          <input
            id="prev"
            type="number"
            value={previous}
            onChange={changeHandler}
          />
        </div>
        <div className="number flex">
          <h4>Total number of stocks purchased: </h4>
          <input
            id="count"
            type="number"
            value={number}
            onChange={changeHandler}
          />
        </div>
        <div className="number flex">
          <h4>Current price: </h4>
          <input
            id="current"
            type="number"
            value={current}
            onChange={changeHandler}
          />
        </div>
      </div>
      <button onClick={clickHandler}>Check Status</button>
      <div className="result">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default App;
