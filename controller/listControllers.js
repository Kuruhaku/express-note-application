import { getDBConnection } from "../database/database.js";

export async function getList(req, res) {
  const db = await getDBConnection()
  const todoList = await db.all(`SELECT description FROM lists`);
  const arrayList = todoList.map((list) => list.description);
  res.json(arrayList);
}

export async function postList(req, res) {
  console.log("postList was called");
}