import { getDBConnection } from "./database.js"

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