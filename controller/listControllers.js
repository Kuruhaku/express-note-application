import { getDBConnection } from "../database/database.js";
import { deleteData } from "../database/deleteData.js";
import { insertData } from "../database/insertData.js";
import { parseBody } from "../utils/paraseBody.js";

export async function getList(req, res) {
  const db = await getDBConnection()
  const todoList = await db.all(`SELECT * FROM lists`);
  // const arrayList = todoList.map((list) => list.description);
  res.json(todoList);
}

export async function postList(req, res) {
  const getParseBody = await parseBody(req);
  const insertParseBody = await insertData(getParseBody);
  res.status(200).json(insertParseBody);
}

export async function deleteList(req, res) {
  const { id } = req.params
  const deleteSpecificData = deleteData(id);
  res.status(200).json(deleteSpecificData);
}