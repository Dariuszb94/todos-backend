import { param } from "express-validator";

const todo = [param("id").notEmpty().isString()];
export default todo;
