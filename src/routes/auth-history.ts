import express from "express";
import type { Request, Response } from "express";

import * as authHistoryController from "../controllers/auth-history";

const authHistoryRouter = express.Router();

authHistoryRouter.get("/", authHistoryController.list)
authHistoryRouter.get("/count", authHistoryController .count)

export default authHistoryRouter; 