import query from "../db/index.js";

async function getNappyInfo(id) {
  const getNappyObject = await query(
    "SELECT * FROM nappies WHERE baby_id = $1;",
    [id]
  );
  const getNappy = getNappyObject.rows;
  return getNappy;
}

async function getNappyInfoByDescription(description, id) {
  const getNappyObjectByDescription = await query(
    "SELECT * FROM nappies WHERE description ILIKE '%'||$1||'%' AND baby_id = $2",
    [description, id]
  );
  const getNappy = getNappyObjectByDescription.rows;
  console.log(getNappy);
  return getNappy;
}

async function addNappyInfo(nappy) {
  const addNappyObject = await query(
    "INSERT INTO nappies (baby_id, start_time, description) VALUES ($1, $2, $3) RETURNING *;",
    [nappy.baby_id, nappy.start_time, nappy.description]
  );
  const addNappy = addNappyObject.rows;
  console.log(addNappy);
  return addNappy;
}

async function updateNappy(id, nappy) {
  const updateBabyObject = await query(
    "UPDATE nappies SET baby_id=$1, start_time=$2, description=$3 WHERE nappy_id = $4 RETURNING *;",
    [nappy.baby_id, nappy.start_time, nappy.description, id]
  );
  const updateBaby = updateBabyObject.rows;
  console.log(updateBaby);
  return updateBaby;
}

async function deleteNappy(id) {
  const deleteNappyObject = await query(
    "DELETE FROM nappies WHERE nappy_id = $1 RETURNING *;",
    [id]
  );
  const deleteNappy = deleteNappyObject.rows;
  return deleteNappy;
}

export {
  getNappyInfo,
  getNappyInfoByDescription,
  addNappyInfo,
  updateNappy,
  deleteNappy,
};
