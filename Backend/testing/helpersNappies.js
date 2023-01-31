import { pool } from "../db/index.js"

export async function createObjectTable() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS nappies (nappy_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, baby_id INT, start_time TIMESTAMP WITHOUT TIME ZONE, description TEXT);"
  );
}

export async function dropObjectTable() {
  return await pool.query("DROP TABLE IF EXISTS nappies;");
}

export async function populateObjectTable() {
  const objects =   [
    {
        baby_id: 1,
        start_time: "2022-12-10 14:14:00 +0000",
        description: "Wee"

    },
    {
        baby_id: 1,
        start_time: "2022-12-17 13:04:00 +0000",
        description: "Poop"
    },
    {
        baby_id: 1,
        start_time: "2022-12-17 12:41:00 +0000",
        description: "wee"
    },
    {
        baby_id: 2,
        start_time: "2022-12-17 12:41:00 +0000",
        description: "wee"
    }
];


  return await pool.query(
    "INSERT INTO nappies (baby_id, start_time, description) (SELECT baby_id, start_time, description FROM json_populate_recordset(NULL::nappies, $1::JSON));",
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

