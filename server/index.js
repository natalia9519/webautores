import { db } from "./database/db.js";
import cors from 'cors';
import express from "express";
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/book", bookRoutes);
app.use("/user", authRoutes);
app.use("/event", eventRoutes);
app.use("/contact",contactRoutes);


export { app };
app.listen(8000, () => {
  console.log("Conectado");
});

db();


