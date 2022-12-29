export default async function getRequest(url, table, userId) {
  const titleObject = await fetch(`${url}/${table}/${userId}`);
  let data = await titleObject.json();
  console.log(data.payload);
  let information = data.payload;

  //convert DATETIME to DD/MM format and HH/MM format
  //Could have done this in the SQL query but I wanted to practice JS
  //SQL code - SELECT nappy_id, baby_id, DATE_FORMAT(start_time, '%d/%m %H:%i') AS start_time, description FROM nappies

  for (let i = 0; i < information.length; i++) {
    let date = new Date(information[i].start_time);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hour = date.getHours();
    let minutes = date.getMinutes();
    information[i].start_time = `${day}/${month} ${hour}:${minutes}`;
  }
  information.sort(function (a, b) {
    return new Date(b.start_time) - new Date(a.start_time);
  });
  return information;
}
