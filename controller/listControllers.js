import { getData, insertData, deleteData } from "../database/lists.js";
import { parseBody } from "../utils/paraseBody.js";

export async function getList(req, res) {
  const getTodoList = await getData();
  res.json(getTodoList);
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