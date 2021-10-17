import express from "express";
import {
  getTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  reset,
} from "../controllers/Todos.js";

const router = express.Router();

router.get("/", getTodos);

router.post("/", createTodo);

router.get("/:id", getTodo);

router.delete("/:id", deleteTodo);

router.delete("/", reset);

router.patch("/:id", updateTodo);

export default router;
