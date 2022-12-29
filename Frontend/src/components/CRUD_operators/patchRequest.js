export default async function patchRequest(
  payload,
  extra,
  object,
  url,
  table,
  id,
  type
) {
  for (let i = 0; i < object.length; i++) {
    if (object[i][type] === id) {
      console.log(id);

      await fetch(`${url}/${table}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          baby_id: 1,
          start_time: payload.start_time,
          [extra]: payload[extra],
        }),
      });
    } 
  } 
}
