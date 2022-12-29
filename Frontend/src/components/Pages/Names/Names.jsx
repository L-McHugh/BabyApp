import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// data from the Name Data folder
import BOY_NAMES from "../../Name Data/BoysNamesData.js";
import GIRL_NAMES from "../../Name Data/GirlsNamesData.js";

// Components
import { Letter } from "./LetterButton.js";
import ToggleSwitch from "../../Components/ToggleSwitch.js";

// Images and CSS
import boyBackground from "../../Images/1.png";
import girlBackground from "../../Images/2.png";
import NamesTitle from "../../Images/NamesTitle.png";
import FavouriteTitle from "../../Images/FavouritesTitle.png";
import "./Names.css";

export function Names() {
  // State for the random name
  const [randomName, setRandomName] = useState("");

  // State for the letter
  const [letter, setLetter] = useState("A");

  // State for the list of names
  const [listItems, setListItems] = useState([]);

  //Set the default of the gender as Boy's names
  const [gender, setGender] = useState(BOY_NAMES);

  // toggle switch between gender setGender(GIRL_NAMES) and setGender(BOY_NAMES)
  // also changes the background based on the gender selected
  function genderSelecting() {
    console.log(document.querySelector("#toggleValue").checked);
    if (document.querySelector("#toggleValue").checked === false) {
      setGender(GIRL_NAMES);
      // document.body.style.backgroundColor = '#F589A4'
      document.body.style.backgroundImage = `url(${girlBackground})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";

      console.log("girls");
    } else {
      setGender(BOY_NAMES);
      // document.body.style.backgroundColor = "#85D2FE"
      document.body.style.backgroundImage = `url(${boyBackground})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";

      console.log("boys");
    }
  }

  //getting a new name
  function RefreshName() {
    let names = gender[letter];

    setRandomName(names[Math.floor(Math.random() * names.length)]);

    console.log(randomName);
  }

  //adding a new name to the list
  function favouriteClick() {
    setListItems([...listItems, { id: uuidv4(), favouriteName: randomName }]);

    console.log("list items", listItems);
  }

  function handleClick(e) {
    setLetter(e.target.id);
  }

  // deleting a name from the list
  function removeClick(id) {
    let index = 0;

    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].id === id.target.id) {
        index = i;
      }
    }
    const newList = [
      ...listItems.slice(0, index),
      ...listItems.slice(index + 1),
    ];
    setListItems(newList);
  }

  return (
    <div>
      <ToggleSwitch onClick={genderSelecting} />

      {/* Title  */}
      <div className="titleDiv">
        <img className="titleImage" src={NamesTitle} alt="Names" />
      </div>

      {/* Random name */}
      <div className="nameDiv">
        <h1 className="randomName">{randomName}</h1>
      </div>

      {/* Buttons */}
      <div className="buttonDiv">
        <button className="refreshButton" onClick={RefreshName}>
          New name
        </button>

        <button className="inputButton" onClick={favouriteClick}>
          Add to favourites
        </button>
      </div>

      <div className="letterButtonDiv">
        <Letter name="A" onClick={handleClick} />
        <Letter name="B" onClick={handleClick} />
        <Letter name="C" onClick={handleClick} />
        <Letter name="D" onClick={handleClick} />
        <Letter name="E" onClick={handleClick} />
        <Letter name="F" onClick={handleClick} />
        <Letter name="G" onClick={handleClick} />
        <Letter name="H" onClick={handleClick} />
        <Letter name="I" onClick={handleClick} />
        <Letter name="J" onClick={handleClick} />
        <Letter name="K" onClick={handleClick} />
        <Letter name="L" onClick={handleClick} />
        <Letter name="M" onClick={handleClick} />
        <Letter name="N" onClick={handleClick} />
        <Letter name="O" onClick={handleClick} />
        <Letter name="P" onClick={handleClick} />
        <Letter name="Q" onClick={handleClick} />
        <Letter name="R" onClick={handleClick} />
        <Letter name="S" onClick={handleClick} />
        <Letter name="T" onClick={handleClick} />
        <Letter name="U" onClick={handleClick} />
        <Letter name="V" onClick={handleClick} />
        <Letter name="W" onClick={handleClick} />
        <Letter name="X" onClick={handleClick} />
        <Letter name="Y" onClick={handleClick} />
        <Letter name="Z" onClick={handleClick} />
      </div>

      <div className="favouriteTitleDiv">
        <img
          className="favouriteTitleImage"
          src={FavouriteTitle}
          alt="Favourites"
        />
      </div>

      {/* Favourites each name has a delete button */}
      <div className="favouriteDiv">
        {listItems.map((list) => (
          <li className="favouriteName" key={list.id} id={list.id}>
            {list.favouriteName}

            <button
              key={list.id}
              className="removeButton"
              onClick={removeClick}
              id={list.id}
            >
              Remove from list
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Names;
