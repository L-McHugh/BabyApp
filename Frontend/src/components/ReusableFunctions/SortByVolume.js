// localeCompare is a method that compares two strings and returns a number depending on whether the first string is greater than, less than or equal to the second string
// sort by volume
export default function sortButton(object, setObject) {
  let sorted = [...object];
  sorted.sort((a, b) => {
    return b.volume - a.volume;
  });
  setObject(sorted);
}
