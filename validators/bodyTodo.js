import { body } from "express-validator";

const todo = [
  body("name").notEmpty().isString(),
  body("completed").notEmpty().isBoolean(),
];
export default todo;
