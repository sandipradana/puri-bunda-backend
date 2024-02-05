import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import employeeRouter from "./routes/employee";
import roleRouter from "./routes/role";
import unitRouter from "./routes/unit";
import authHistoryRouter from "./routes/auth-history";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/roles", roleRouter);
app.use("/units", unitRouter);
app.use("/employees", employeeRouter);
app.use("/auth-histories", authHistoryRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
