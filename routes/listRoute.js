import express from 'express'
import { getList, postList, deleteList } from '../controller/listControllers.js';

export const listRoute = express.Router();

listRoute.get('/lists', getList);
listRoute.post('/postList', postList);
listRoute.delete('/postList/:id', deleteList)