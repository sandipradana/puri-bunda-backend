import { Request, Response } from 'express';

import * as authHistoryModel from "../models/auth-history";
import * as employeeModel from "../models/employee";

export async function list(request: Request, response: Response) {
    try {
        const authHistories = await authHistoryModel.list();

        const mapped = await Promise.all(authHistories.map(async (history) => {
            const employee = await employeeModel.get(history.employeeId);
            return {
                id: history.id,
                total: history._count.id,
                employee_id: employee?.id,
                employee_name: employee?.name,
            };
        }));
        return response.status(200).json({ data: mapped});
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function count(request: Request, response: Response): Promise<void> {
    try {
        const count = await authHistoryModel.count()
        response.status(200).json({ data: { total: count } });
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}