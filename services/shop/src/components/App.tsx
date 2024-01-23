import { useState } from "react";
import { Outlet } from "react-router-dom";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{__PLATFORM__}</h1>
      <br />
      <h2>SHOP MODULE</h2>
      Hello{counter}
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}>Click</button>
      {/* <Outlet /> */}
    </div>
  );
};
