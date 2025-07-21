import { getDBConnection } from "./database/database.js";

async function viewAllList() {
  const db = await getDBConnection();
  try {
    const list = await db.all(/* sql */ `SELECT * FROM lists`);
    console.table(list);
  }

  catch (err) {
    console.error(`Error fetching lists: ${err.message}`);
  }

  finally {
    await db.close();
  }
}

viewAllList()