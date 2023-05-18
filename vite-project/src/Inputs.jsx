import React, { useEffect, useState } from "react";
const Inputs = () => {
  const [input, setInput] = useState("");
//   const [increaseReached, setIncreasedReached] = useState(false);
  const [count, setCount] = useState(0);
  const handleOnChange = e => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleIncrease = () => {
    if (count === 5) {
    //   setIncreasedReached(true);
      return;
    }
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count === -5) {
      //   alert("Nothing to decrement");
      return;
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2 className="m-3 text-danger"> Enter Your Input !!</h2>
      <input type="text" onChange={handleOnChange} />
      <h5 className="m-3 text-info"> Your Output !!</h5>
      <h6>
        {input}
      </h6>
      <div>
        <button className="btn btn-primary m-2" onClick={handleIncrease}>
          Increase
        </button>
        <button className="btn btn-danger m-2" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn btn-warning m-2">
          Counter = {count}
        </button>
        <button onClick={reset} className="btn btn-info">
          Reset
        </button>
      </div>

      <button className="btn btn-success m-2">
        {count === 5
          ? <p>Increase Limit 05 Reached !!</p>
          : count === -5 ? <p>Decrease Limit -05 Reached !!</p> : <p>Increase Decrease From -05 To 05 !!</p>}
      </button>
    </div>
  );
};

export default Inputs;
