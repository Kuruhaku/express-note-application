import { getDBConnection } from "./database.js";

export async function getData() {
  const db = await getDBConnection()

  try {
    const todoList = await db.all(`SELECT * FROM lists`);
    return todoList;
  }
  catch (err) {
    console.error(`Error inserting data: ${err.message}`)
  }

  finally {
    await db.close();
    console.log("Database conncetion closed")
  }
}


export async function insertData(newList) {
  const db = await getDBConnection();

  try {
    await db.exec("BEGIN TRANSACTION")

    const { description } = newList;
    await db.run(
      /* sql */`
      INSERT INTO lists (description) VALUES (?)
      `, [description]
    )

    console.log('Insert Data Complete');
    await db.exec("COMMIT")
  }

  catch (err) {
    await db.exec("ROLLBACK");
    console.error(`Error inserting data: ${err.message}`)
  }

  finally {
    await db.close();
    console.log("Database conncetion closed")
  }
}

export async function deleteData(id) {
  const db = await getDBConnection();

  try {
    await db.exec("BEGIN TRANSACTION");

    await db.run(
    /* sql */`
      DELETE FROM lists WHERE id = ?;
    `, [id]
    )

    console.log("Successfully Delete Data")
    await db.exec("COMMIT");
  }

  catch (err) {
    await db.exec("ROLLBACK");
    console.error(`Erorr Deleting Data: ${err.message}`)
  }

  finally {
    await db.close()
    console.log("Database Conncetion Close");
  }
}