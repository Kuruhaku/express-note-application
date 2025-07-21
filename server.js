import express from 'express';
import { listRoute } from './routes/listRoute.js';

const app = express();

app.use(express.static("public"))

app.use("/api", listRoute);

app.listen(8080, () =>
  console.log("Connected to Port 8080")
)