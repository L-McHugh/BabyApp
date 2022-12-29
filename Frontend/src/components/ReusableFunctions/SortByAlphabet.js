// localeCompare is a method that compares two strings and returns a number depending on whether the first string is greater than, less than or equal to the second string
export default function sortButton(object, setObject) {
  let sorted = [...object];
  sorted.sort((a, b) => {
    return a.description
      .toLowerCase()
      .localeCompare(b.description.toLowerCase());
  });
  setObject(sorted);
}
