export default function SortButton(props) {
  return (
    <div>
      <button onClick={() => props.sortButton(props.object, props.setObject)}>
        {props.label}
      </button>
    </div>
  );
}
