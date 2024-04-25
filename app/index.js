// import { db } from "./database/db.js";
// import cors from 'cors';
// import express from "express";
// import bookRoutes from './routes/bookRoutes.js';
// import authRoutes from './routes/authRoutes.js';
// import eventRoutes from './routes/eventRoutes.js';
// import contactRoutes from './routes/contactRoutes.js';
// import path from 'path';


// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/book", bookRoutes);
// app.use("/user", authRoutes);
// app.use("/event", eventRoutes);
// app.use("/contact",contactRoutes);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })

// export { app };
// app.listen(8000, () => {
//   console.log("Conectado");
// });

// db();
// const dirname = path.resolve();






import { db } from "./database/db.js";
import cors from 'cors';
import express from "express";
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/book", bookRoutes);
app.use("/user", authRoutes);
app.use("/event", eventRoutes);
app.use("/contact", contactRoutes);

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

db().then(() => {
  const PORT = 8000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
  process.exit(1);
});