import React, { useState } from "react";

//would need work to get it all to work with setState instead of the push and pop//

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  /////////////////////////////////////////////////
  function back() {
    mode === initial ? setHistory(initial) : history.pop();
    const lastState = history.length - 1;
    setMode(history[lastState]);
  }

  /////////////////////////////////////////////////
  function transition(next, replace = false) {
    replace ? setMode([initial]) : history.push(next);
    setMode(next);
  }
  return { mode, transition, back };
};

/////////////////////////////////////////////////
export default useVisualMode;
