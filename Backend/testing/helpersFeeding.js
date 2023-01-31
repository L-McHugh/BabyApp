import { pool } from "../db/index.js"

export async function createObjectTable() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS feeding (feeding_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, baby_id INT, start_time TIMESTAMP WITHOUT TIME ZONE, volume INT);"
  );
}

export async function dropObjectTable() {
  return await pool.query("DROP TABLE IF EXISTS feeding;");
}

export async function populateObjectTable() {
  const objects =   [
    { 
      baby_id: 1, 
      start_time: "2022-12-17 14:14:00 +0000", 
      volume: 30 
    },
    { 
      baby_id: 1, 
      start_time: "2022-12-18 13:04:00 +0000", 
      volume: 20 
    },
    { 
      baby_id: 1, 
      start_time: "2022-12-19 12:41:00 +0000", 
      volume: 40
    },
    { 
      baby_id: 2, 
      start_time: "2022-12-18 12:41:00 +0000", 
      volume: 10
    },
    { 
      baby_id: 3, 
      start_time: "2022-12-17 12:45:00 +0000", 
      volume: 60 
    }

];


  return await pool.query(
    "INSERT INTO feeding (baby_id, start_time, volume) (SELECT baby_id, start_time, volume FROM json_populate_recordset(NULL::feeding, $1::JSON));",
    //json_populate_recordset is a function that takes a table name and a json object and returns a table with the json object's data
    [JSON.stringify(objects)]
  );
}

export async function resetObjectTable() {
  return [
    await dropObjectTable(),
    await createObjectTable(),
    await populateObjectTable(),
  ];
}

