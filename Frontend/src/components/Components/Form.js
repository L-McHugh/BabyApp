import React from "react";
import "./Form.css";

export default function Form(props) {
  return (
    <div>
      <div data-testid="form" className="exitButtonDiv">
        <button className="exitButton" onClick={props.visibility}>
          X
        </button>
      </div>

      <form className="formDiv" autoComplete="off">
        <label className="timeLabel">
          Start time:
          <input
            data-testid="formTime"
            type="datetime-local"
            name="start_time"
            required
            onChange={props.onChangeTime}
          />
        </label>

        <label className="typeLabel">
          {props.label}:
          <input
            data-testid="formDescription"
            type={props.type}
            name="description"
            required
            onChange={props.onChangeDescription}
            placeholder={props.placeholder}
          />
        </label>

        <button data-testid="formButton" onClick={props.onClick}>Submit</button>
      </form>
    </div>
  );
}
