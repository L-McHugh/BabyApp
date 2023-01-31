import query  from "../db/index.js";

//query database and get information for SHOPPING LIST TABLE
async function getShoppingInfoByID(id){
    const getShoppingObject = await query("SELECT * FROM shopping_list WHERE baby_id = $1;",[id])
    const getShopping = getShoppingObject.rows;
    return getShopping;
}


async function addShoppingInfo(shopping){
    const addShoppingObject = await query("INSERT INTO shopping_list (baby_id, item, item_type) VALUES ($1, $2, $3) RETURNING *;",[shopping.baby_id, shopping.item, shopping.item_type] );
    const addShopping = addShoppingObject.rows;
    return addShopping;
}


async function updateShopping(id, shopping){
    const updateShoppingObject = await query('UPDATE shopping_list SET baby_id=$1, item=$2, item_type=$3 WHERE shopping_id = $4 RETURNING *;', [shopping.baby_id, shopping.item, shopping.item_type, id])
    const updateShopping = updateShoppingObject.rows
    return updateShopping
}


async function deleteShopping(id){
    const deleteShoppingObject = await query("DELETE FROM shopping_list WHERE shopping_id = $1 RETURNING *;",[id])
    const deleteShopping = deleteShoppingObject.rows
    return deleteShopping;
}


export {
    getShoppingInfoByID,
    addShoppingInfo,
    updateShopping,
    deleteShopping
}