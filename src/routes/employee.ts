import express from "express";
import type { Request, Response } from "express";

import * as employeeController from "../controllers/employee";

const employeeRouter = express.Router();

employeeRouter.get("/", employeeController.list)
employeeRouter.get("/:id(\\d+)", employeeController.get)
employeeRouter.post("/", employeeController.create)
employeeRouter.put("/:id(\\d+)", employeeController.update)
employeeRouter.delete("/:id(\\d+)", employeeController.delete)
employeeRouter.post("/login", employeeController.login)
employeeRouter.get("/count", employeeController.count)

export default employeeRouter; 