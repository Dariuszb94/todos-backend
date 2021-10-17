import express from "express";
import bodyParser from "body-parser";
import todosRoutes from "./routes/todos.js";

import cors from "cors";

const app = express();
const PORT = 8080;
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());

app.use("/todos", todosRoutes);
app.get("/", (req, res) => res.send("Welcome to the todos API!"));
// app.all("*", (req, res) =>
//   res.send("You've tried reaching a route that doesn't exist.")
// );

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
