import query from "../db/index.js";

//query database and get information for FEEDING TABLE
async function getFeedingInfoByID(id) {
  const getFeedingObject = await query(
    "SELECT * FROM feeding WHERE baby_id = $1;",
    [id]
  );
  const getFeeding = getFeedingObject.rows;
  //   console.log(getFeeding);
  return getFeeding;
}

async function getFeedingInfoByVolume(volume, id) {
  const getFeedingObjectByVolume = await query(
    "SELECT * FROM feeding WHERE volume = $1 AND baby_id = $2",
    [volume, id]
  );
  const getFeeding = getNappyObjectByVolume.rows;
  console.log(getFeeding);
  return getFeeding;
}

async function addFeedingInfo(feeding) {
  const addFeedingObject = await query(
    "INSERT INTO feeding (baby_id, start_time, volume) VALUES ($1, $2, $3) RETURNING *;",
    [feeding.baby_id, feeding.start_time, feeding.volume]
  );
  const addFeeding = addFeedingObject.rows;
  return addFeeding;
}

async function updateFeeding(id, feeding) {
  const updateFeedingObject = await query(
    "UPDATE feeding SET baby_id=$1, start_time=$2, volume=$3 WHERE feeding_id = $4 RETURNING *;",
    [feeding.baby_id, feeding.start_time, feeding.volume, id]
  );
  const updateFeeding = updateFeedingObject.rows;
  return updateFeeding;
}

async function deleteFeeding(id) {
  const deleteFeedingObject = await query(
    "DELETE FROM feeding WHERE feeding_id = $1 RETURNING *;",
    [id]
  );
  const deleteFeeding = deleteFeedingObject.rows;
  return deleteFeeding;
}

export {
  getFeedingInfoByID,
  getFeedingInfoByVolume,
  addFeedingInfo,
  updateFeeding,
  deleteFeeding,
};
