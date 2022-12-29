import React from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch(props) {
  return (
    <div>
      <label className="switch">
        <input id="toggleValue" type="checkbox" onClick={props.onClick} />
        <span className="toggle"></span>
      </label>
    </div>
  );
}
