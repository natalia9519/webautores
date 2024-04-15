import { db } from "./database/db.js";
import cors from 'cors';
import express from "express";
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/book", bookRoutes);
app.use("/user", authRoutes);
app.use("/event", eventRoutes);



export { app };

app.listen(8000, () => {
  console.log("Conectado");
});

db();