import express from "express";
import * as roleController from "../controllers/role";

const roleRouter = express.Router();

roleRouter.get("/", roleController.list)
roleRouter.get("/:id(\\d+)", roleController.get)
roleRouter.post("/", roleController.create)
roleRouter.put("/", roleController.update)
roleRouter.delete("/:id(\\d+)", roleController.delete)
roleRouter.get("/count", roleController.count)

export default roleRouter; 