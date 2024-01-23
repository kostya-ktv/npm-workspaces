import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [counter, setCounter] = useState(0);
  // if (__PLATFORM__ === "mobile") {
  //   return (
  //     <h2 onClick={() => setCounter((prev) => prev + 1)}>
  //       Mobile screen2asd3!${counter}
  //       <h2 data-testid="h2Mobile">MOBILE TEST TAG</h2>
  //     </h2>
  //   );
  // }
  return (
    <div>
      <h1>{__PLATFORM__}</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      Hello{counter}
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}>Click</button>
      <Outlet />
    </div>
  );
};
