import express from "express";
import {
  getTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  reset,
} from "../controllers/Todos.js";
import todoBodyValidation from "../validators/bodyTodo.js";
import todoIdParamValidation from "../validators/todoIdParam.js";

import validation from "../validators/validation.js";
const router = express.Router();

router.get("/", getTodos);

router.post("/", todoBodyValidation, validation, createTodo);

router.get("/:id", todoIdParamValidation, validation, getTodo);

router.delete("/:id", todoIdParamValidation, validation, deleteTodo);

router.delete("/", reset);

router.patch(
  "/:id",
  todoBodyValidation,
  todoIdParamValidation,
  validation,
  updateTodo
);

export default router;
