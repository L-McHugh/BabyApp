export default function SortButton(props) {
  return (
    <div>
      <button 
      data-testid="sortButton"
      onClick={() => props.sortButton(props.object, props.setObject)}>
        {props.label}
      </button>
    </div>
  );
}
