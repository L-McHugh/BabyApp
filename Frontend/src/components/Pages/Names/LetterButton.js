import React from "react";
import "./Names.css";

export function Letter(props) {
  return (
    <div>
      <button className="letterButton" onClick={props.onClick} id={props.name}>
        {props.name}
      </button>
    </div>
  );
}
