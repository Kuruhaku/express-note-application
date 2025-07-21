import { getDBConnection } from "./database/database.js";

async function createTable() {
  const db = await getDBConnection();
  await db.exec(
    /* sql */ `
    CREATE TABLE IF NOT EXISTS lists(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL
    )
    `
  )

  await db.close()
}

createTable();