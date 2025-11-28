import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import authMiddleware from './middleware/authMiddleware.js';


const app = express()
const PORT = process.env.PORT || 5003

// get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)
// get the directory name from the file path
const __dirname = dirname(__filename)


//Middleware
app.use(express.json())
// server the html file from the /public directory 
// tells express to serve all files from the public folder as static assets / files. 

app.use(express.static(path.join(__dirname, "../public")));


// serving up the HTML file from the /public derectory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

//routes
app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});