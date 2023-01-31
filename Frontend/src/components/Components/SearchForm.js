import "./SearchForm.css";

export default function SearchForm(props) {
  return (
    <div className="searchFormDiv">
      <input
        data-testid="searchFormInput"
        className="input"
        type={props.type}
        onChange={props.handleSearch}
      />

      <button data-testid="searchFormButton" onClick={props.handleClickDescription}>{props.label}</button>
    </div>
  );
}
