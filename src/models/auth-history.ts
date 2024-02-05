import { Prisma } from "@prisma/client";
import { database } from "../libraries/database";
import { Role } from "./role";
import { Unit } from "./unit";

export type AuthHistory = {
    id: number;
    employeeId: number;
};

export type AuthHistoryWrite = {
    employee_id: number;
};

export const create = async (history: AuthHistoryWrite): Promise<AuthHistory> => {
    return database.employeeAuhtHistory.create({
        data: {
            employeeId: history.employee_id
        },
        select: {
            id: true,
            employeeId: true,
        },
    });
};

export const list = async (): Promise<any[]> => {
    const authHistories = database.employeeAuhtHistory.groupBy({
        by: ["employeeId"],
        _count: {
            id:true
        },
        orderBy:{
            employeeId: "desc"
        },
        having:{
            id:{
                _count:{
                    gt: 25
                }
            }
        },
        take:10
    })
    return authHistories
};

export const count = async (): Promise<number> => {
    return database.employeeAuhtHistory.count();
}