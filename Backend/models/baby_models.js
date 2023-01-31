import query  from "../db/index.js";

//query database and get information for BABY TABLE
async function getBabyInfoByID(id){
    const babyInfoObject = await query("SELECT * FROM baby WHERE id = $1;",[id]);
    const babyInfo = babyInfoObject.rows;
    return babyInfo;
}

async function addBabyInfo(id, baby){
    const babyInfoObject = await query('INSERT INTO baby (first_name, last_name, age, gender, weight, baby_picture) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',[baby.first_name, baby.last_name, baby.age, baby.gender, baby.weight, baby.baby_picture]);
    console.log(babyInfoObject)
    const babyInfo = babyInfoObject.rows;
    return babyInfo;
}


async function updateBaby(id, baby){
    console.log(baby)
    const updateBabyObject = await query('UPDATE baby SET first_name=$1, last_name=$2, age=$3, gender=$4, weight=$5 ,baby_picture=$6 WHERE id = $7 RETURNING *;', [baby.first_name, baby.last_name, baby.age, baby.gender, baby.weight, baby.baby_picture, id])
    const updateBaby = updateBabyObject.rows
    return updateBaby
}


async function deleteBaby(id){
    const deleteBabyObject = await query("DELETE FROM baby WHERE id = $1 RETURNING *;",[id])
    const deleteBaby = deleteBabyObject.rows
    return deleteBaby
}


export {
    getBabyInfoByID,
    addBabyInfo,
    updateBaby,
    deleteBaby
}





