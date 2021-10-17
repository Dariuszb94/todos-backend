import { v4 as uuid } from "uuid";

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
  res.send(foundTodo);
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  res.send(`Todo with id ${id} has been deleted`);
};
export const reset = (req, res) => {
  todos = [];
  res.send(`All todos has been deleted`);
};
export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;
  let todo = todos.find((todo) => todo.id === id);

  if (name) todo.name = name;
  if (completed) todo.completed = completed;
  res.send(`${id}.age has been updated.`);
};
