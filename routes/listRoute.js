import express from 'express'
import { getList, postList } from '../controller/listControllers.js';

export const listRoute = express.Router();

listRoute.get('/', getList);
listRoute.post('/postList', postList);