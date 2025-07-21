import { getDBConnection } from "./database/database.js";
import { list } from "./data.js";

async function insertData() {
  const db = await getDBConnection();

  try {
    await db.exec("BEGIN TRANSACTION")

    for (const { description } of list) {
      await db.run(
        /* sql */`
        INSERT INTO lists (description) VALUES (?)
        `, [description]
      )
    }
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

insertData();