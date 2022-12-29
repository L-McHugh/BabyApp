import React, { useState } from "react";
import Form from "../../Components/Form.js";

//CSS and title image
import "./Nappies.css";
import NappiesTitle from "../../Images/NappiesTitle.png";

//CRUD operations
import getRequest from "../../CRUD_operators/getRequest.js";
import deleteRequest from "../../CRUD_operators/deleteRequest.js";
import patchRequest from "../../CRUD_operators/patchRequest.js";

//Reusable functions and components
import SearchForm from "../../Components/SearchForm.js";
import SortButton from "../../Components/SortButton.js";
import sortButton from "../../ReusableFunctions/SortByAlphabet.js";

export function Nappies() {
  //variables for CRUD operations and reusable functions
  const url = "http://localhost:3001/api";
  const table = "nappies";
  const userId = 1;
  const extra = "description";
  const type = "nappy_id";

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

  //payload for the post request
  //set to null to avoid errors and to make sure the user has to fill in the form
  const [payload, setPayload] = useState({
    start_time: null,
    description: null,
  });

  function onChangeTime(e) {
    let text = e.target.value;
    setPayload({ ...payload, start_time: text });
  }

  function onChangeDescription(e) {
    let text = e.target.value;
    setPayload({ ...payload, description: text });
  }

  //post request button
  async function onClick(e) {
    e.preventDefault();
    let obj = {
      baby_id: userId,
      start_time: payload.start_time,
      description: payload.description,
    };
    await fetch("http://localhost:3001/api/nappies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      //get a console log of the response
      .then((response) => console.log(JSON.stringify(response)));
  }

  //search by description button
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function searchByDescription() {
    const titleObject = await fetch(`${url}/${table}/${userId}/${search}`);
    let data = await titleObject.json();
    let information = data.payload;
    console.log(information);

    //convert DATETIME to DD/MM format and HH/MM format
    for (let i = 0; i < information.length; i++) {
      let date = new Date(information[i].start_time);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let hour = date.getHours();
      let minutes = date.getMinutes();
      information[i].start_time = `${day}/${month} ${hour}:${minutes}`;
    }
    return information;
  }

  async function handleClickDescription() {
    let information = await searchByDescription();
    return setObject(information);
  }


  // JSX components for the page and the CRUD operations
  return (
    <div className="nappyPageDiv">
      <img src={NappiesTitle} alt="Nappies" className="nappyTitle" />

      {/* Getting all the information about nappies */}
      <button onClick={handleClick}>Get Nappies</button>

      <SearchForm
        label={"Search by description"}
        type={"text"}
        handleSearch={handleSearch}
        handleClickDescription={handleClickDescription}
      />

      <SortButton
        label={"Sort by description"}
        sortButton={sortButton}
        object={object}
        setObject={setObject}
      />

      {/* Create a new post */}
      <button onClick={handleVisibility}>Add</button>

      <div
        className="form-container"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <Form
          label={"Description"}
          type={"text"}
          visibility={handleVisibility}
          onClick={onClick}
          onChangeDescription={onChangeDescription}
          onChangeTime={onChangeTime}
          placeholder={"Description"}
        />
      </div>

      {/* Displaying the information */}
      {object.map((item) => {
        return (
          <div>
            <div key={item.nappy_id} id={item.nappy_id} className="listDiv">
              <h2>{item.start_time}</h2>

              <h1>{item.description}</h1>

              {/* Deleting an object */}
              <button
                onClick={() =>
                  deleteRequest(object, setObject, url, table, item.nappy_id, type)
                }
              >
                Delete
              </button>

              <button onClick={() => handleVisibilityEdit()}>Edit</button>
            </div>
            <div
              className="form-container"
              style={{ visibility: isVisibleEdit ? "visible" : "hidden" }}
            >
              <Form
                label={"Edit"}
                type={"text"}
                visibility={handleVisibilityEdit}
                onClick={() =>
                  patchRequest(
                    payload,
                    extra,
                    object,
                    url,
                    table,
                    item.nappy_id,
                    type
                  )
                }
                onChangeDescription={onChangeDescription}
                onChangeTime={onChangeTime}
                placeholder={item.description}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Nappies;
