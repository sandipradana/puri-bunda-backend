import express from "express";
import * as unitController from "../controllers/unit";

const unitRouter = express.Router();

unitRouter.get("/", unitController.list)
unitRouter.get("/:id(\\d+)", unitController.get)
unitRouter.post("/", unitController.create)
unitRouter.put("/", unitController.update)
unitRouter.delete("/:id(\\d+)", unitController.delete)
unitRouter.get("/count", unitController.count)

export default unitRouter; 