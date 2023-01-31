import React, { useState } from "react";
import Form from "../../Components/Form.js";

//CRUD operations
import getRequest from "../../CRUD_operators/getRequest.js";
import deleteRequest from "../../CRUD_operators/deleteRequest.js";
import patchRequest from "../../CRUD_operators/patchRequest.js";

//Reusable functions and components
import SortButton from "../../Components/SortButton.js";
import sortButton from "../../ReusableFunctions/SortByVolume.js";
import ProgressBar from "../../Components/ProgressBar.js";

// Title image and CSS
import FeedingTitle from "../../Images/FeedingTitle.png";
import "./Feeding.css";


export function Feeding() {
  //variables for CRUD operations and reusable functions
  const url = "http://localhost:3001/api";
  const table = "feeding";
  const userId = 1;
  const extra = "volume";
  const type = "feeding_id";

  //State for the object
  const [object, setObject] = useState([]);

  // Visibility for the 'create new object' form
  const [isVisible, setVisible] = useState();

  function handleVisibility() {
    setVisible(!isVisible);
  }

  // Visibility for the 'edit object' form
  const [isVisibleEdit, setVisibleEdit] = useState();

  function handleVisibilityEdit() {
    setVisibleEdit(!isVisibleEdit);
  }

  // get request button
  async function handleClick() {
    let information = await getRequest(url, table, userId);
    setObject(information);
  }

  //payload for the post request and set to null to avoid errors and to make sure the user has to fill in the form
  const [payload, setPayload] = useState({
    start_time: null,
    volume: null,
  });

  function onChangeTime(e) {
    let text = e.target.value;
    setPayload({ ...payload, start_time: text });
    console.log(text);
  }

  function onChangeDescription(e) {
    let text = e.target.value;
    setPayload({ ...payload, volume: text });
    console.log(text);
  }

  //post request button
  async function onClick(e) {
    e.preventDefault();
    let obj = {
      baby_id: userId,
      start_time: payload.start_time,
      volume: payload.volume,
    };
    await fetch(`${url}/${table}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      //get a console log of the response
      .then((response) => console.log(JSON.stringify(response)));
  }

  //total milk for last 24 hours for progress bar
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;

  let totalMilk = 0;

  object.forEach((item) => {
    let itemDate = item.start_time.split("/")[0];
    let itemMonth = item.start_time.split("/")[1];
    //to not include the time in the date
    itemDate = itemDate.split(" ")[0];
    itemMonth = itemMonth.split(" ")[0];

    //turning the string into a number
    itemDate = parseInt(itemDate);
    itemMonth = parseInt(itemMonth);

    if (day === itemDate && month === itemMonth) {
      totalMilk += item.volume;
    }
    return totalMilk;
  });

  const totalMilkPercentage = (totalMilk / 100) * 100;

  // JSX for the page
  return (
    <div className="feedingPageDiv">
    {/* Title */}
      <img data-testid="feedingTitle"  className="feedingTitle" src={FeedingTitle} alt="feedingTitle" />

      {/* Progress bar */}
      <h3 className="heading">Daily total</h3>
      <ProgressBar
        bgcolor="orange"
        progress={totalMilkPercentage}
        height={30}
      />

      {/* Getting all the information about nappies */}
      <button data-testid="getFeedingButton" onClick={handleClick}>Get Feeding</button>

      {/* Create a new post */}
      <button data-testid="addFeedingButton" onClick={handleVisibility}>Add</button>
      <div
        className="form-container"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <Form
          label={"Amount"}
          type={"number"}
          visibility={handleVisibility}
          onClick={onClick}
          onChangeDescription={onChangeDescription}
          onChangeTime={onChangeTime}
          placeholder={"Amount in ml"}
        />
      </div>

      {/* Sort the information */}
      <SortButton
        className="sortButton"
        label={"Sort by amount"}
        sortButton={sortButton}
        object={object}
        setObject={setObject}
        placeholder={"Amount in ml"}
      />

      {/* Displaying the information */}
      {object.map((item) => {
        return (
          <div data-testid="feedingData">
            <div key={item.feeding_id} id={item.feeding_id} className="listDiv">
              <h2 data-testid="feedings" >{item.start_time}</h2>

              <h1>{item.volume}ml</h1>

              {/* Each object to have a delete button */}
              <button
                onClick={() =>
                  deleteRequest(object, setObject, url, table, item.feeding_id, type)
                }
              >
                Delete
              </button>

              {/* Each object to have an edit button and form */}
              <button onClick={() => handleVisibilityEdit()}>Edit</button>
            </div>
            <div
              className="form-container"
              style={{ visibility: isVisibleEdit ? "visible" : "hidden" }}
            >
              <Form
                label={"Edit"}
                type={"number"}
                visibility={handleVisibilityEdit}
                onClick={() =>
                  patchRequest(
                    payload,
                    extra,
                    object,
                    url,
                    table,
                    item.feeding_id,
                    type
                  )
                }
                onChangeDescription={onChangeDescription}
                onChangeTime={onChangeTime}
                placeholder={item.volume + "ml"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feeding;
