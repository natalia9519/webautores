import { db } from "./database/db.js";
import cors from 'cors'

import  express  from "express";
const app = express();
import bookRoutes from './routes/bookRoutes.js'
import authRoutes from './routes/authRoutes.js'

app.use(cors())
app.use(express.json())


app.use("/book", bookRoutes)
app.use("/user", authRoutes)
app.listen(8000, console.log("conectado"))
db()