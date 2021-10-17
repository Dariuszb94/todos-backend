import { v4 as uuid } from "uuid";
import { body, validationResult } from "express-validator";

let todos = [];

export const getTodos = (req, res) => {
  res.send(todos);
};

export const createTodo = (req, res) => {
  const todo = req.body;
  todos.push({ ...todo, id: uuid() });
  res.send(`Todo ${todo.name} added to the database.`);
};

export const getTodo = (req, res) => {
  const foundTodo = todos.find((todo) => todo.id === req.params.id);
  foundTodo
    ? res.send(foundTodo)
    : res.status(404).json({
        status: "fail",
        message: `Can't find todo with id ${req.params.id} on this server!`,
      });
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  // todos = todos.filter((todo) => {todo.id !== id});
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex >= 0) {
    todos.splice(todoIndex, 1);
    res.send(`Todo with id ${id} has been deleted`);
  } else {
    res.status(400).json({
      status: "fail",
      message: `Can't find todo with id ${id} on this server!`,
    });
  }
};
export const reset = (req, res) => {
  todos = [];
  res.send(`All todos has been deleted`);
};
export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;
  let todo = todos.find((todo) => todo.id === id);
  if (todo) {
    if (name) todo.name = name;
    if (completed !== undefined) todo.completed = completed;
    res.send(`${id}.age has been updated.`);
  } else
    res.status(400).json({
      status: "fail",
      message: `Can't find todo with id ${id} on this server!`,
    });
};
