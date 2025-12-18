import React from "react";
import { useColor } from "./ContextProvider";

export default function ComponentA() {
  const { colorToggler } = useColor();
  return (
    <div>
        <h1>Componeent A</h1>
      <button onClick={colorToggler}>Color Toggler</button>
    </div>
  );
}
