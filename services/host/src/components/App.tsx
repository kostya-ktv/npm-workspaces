import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@packages/shared/ui/button";
export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{__PLATFORM__}</h1>
      <Link to="/about">About</Link>
      <br />
      <Button />
      <Link to="/shop">Shop</Link>
      Hello{counter}
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}>Click</button>
      <Outlet />
    </div>
  );
};
