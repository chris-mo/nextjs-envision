import React from "react";
import "./Button.module.scss";

function Button({ textInput, styleBtn }) {
  return <button className={`btn ${styleBtn}`}>{textInput}</button>;
}

export default Button;
