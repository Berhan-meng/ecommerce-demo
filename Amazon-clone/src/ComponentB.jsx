import React from "react";
import { useColor } from "./ContextProvider";
import styles from "./App.module.css";

export default function ComponentB() {
  const { color } = useColor();
  return (
    <div className={`${styles}.${color}`}>
      <h1>Component B</h1>
      <h2>The theme color is {color}</h2>
    </div>
  );
}
