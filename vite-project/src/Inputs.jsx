import React, { useEffect, useState } from "react";
const Inputs = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const handleOnChange = e => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count === 0) {
      alert("Nothing to decrement");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2> Enter Your Input !!</h2>
      <input type="text" onChange={handleOnChange} />
      <h5> Your Output !!</h5>

      <h6>
        {input}
      </h6>
      <button className="btn btn-primary m-2" onClick={handleIncrease}>
        Increase
      </button>
      <button className="btn btn-danger m-2" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="btn btn-warning m-2">
        {count}
      </button>
    </div>
  );
};

export default Inputs;
