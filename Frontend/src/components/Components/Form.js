import React from "react";
import "./Form.css";

export default function Form(props) {
  return (
    <div>
      <div className="exitButtonDiv">
        <button className="exitButton" onClick={props.visibility}>
          X
        </button>
      </div>

      <form className="formDiv" autoComplete="off">
        <label className="timeLabel">
          Start time:
          <input
            type="datetime-local"
            name="start_time"
            required
            onChange={props.onChangeTime}
          />
        </label>

        <label className="typeLabel">
          {props.label}:
          <input
            type={props.type}
            name="description"
            required
            onChange={props.onChangeDescription}
            placeholder={props.placeholder}
          />
        </label>

        <button onClick={props.onClick}>Submit</button>
      </form>
    </div>
  );
}
