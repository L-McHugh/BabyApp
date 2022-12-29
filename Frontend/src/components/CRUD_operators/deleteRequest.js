export default async function deleteRequest(object, setObject, url, table, id, type) {
  for (let i = 0; i < object.length; i++) {
    if (object[i][type] === id) {
      console.log(id);
      await fetch(`${url}/${table}/${id}`, {
        method: "DELETE",
      });
      const deleted = [...object.slice(0, i), ...object.slice(i + 1)];
      setObject(deleted);
    }
  }
  return object;
}
