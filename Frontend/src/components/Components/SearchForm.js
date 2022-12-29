import "./SearchForm.css";

export default function SearchForm(props) {
  return (
    <div className="searchFormDiv">
      <input
        className="input"
        type={props.type}
        onChange={props.handleSearch}
      />

      <button onClick={props.handleClickDescription}>{props.label}</button>
    </div>
  );
}
