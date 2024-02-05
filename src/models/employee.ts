import { database } from "../libraries/database";
import { Role } from "./role";
import { Unit } from "./unit";

export type Employee = {
    id: number;
    name: string;
    username: string;
    password: string;
    unit: Unit;
    roles: Role[];
};

export type EmployeeWrite = {
    name: string;
    username: string;
    password: string;
    unit_id: number
    roles: Role[]
};

export const create = async (employee: EmployeeWrite): Promise<Employee> => {
    return database.employee.create({
        data: {
            name: employee.name,
            username: employee.username,
            password: employee.password,
            unitId: employee.unit_id,
            roles:{
                connect:employee.roles
            },
        },
        select: {
            id: true,
            name: true,
            username: true,
            password: true,
            unit: {
                select: {
                    id: true,
                    name: true
                },
            },
            roles: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
    });
};

export const get = async (EmployeeId: number): Promise<Employee | null> => {
    return database.employee.findUnique({
        where: { id: EmployeeId },
        select: {
            id: true,
            name: true,
            username: true,
            password: true,
            unit: {
                select: {
                    id: true,
                    name: true
                },
            },
            roles: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
    });
};

export const update = async (id: number, employee: EmployeeWrite): Promise<Employee | null> => {
    return database.employee.update({
        where: {
            id: id
        },
        data: {
            name: employee.name,
            username: employee.username,
            password: employee.password,
            unitId: employee.unit_id,
            roles:{
                connect:employee.roles
            },
        },
        select: {
            id: true,
            name: true,
            username: true,
            password: true,
            unit: {
                select: {
                    id: true,
                    name: true
                },
            },
            roles: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
    });
};

export const _delete = async (id: number): Promise<void> => {
    await database.employee.delete({
        where: { id: id },
    });
};

export const list = async (): Promise<Employee[]> => {
    return database.employee.findMany({
        orderBy: [
            {
                id:'desc',
            }],
        select: {
            id: true,
            name: true,
            username: true,
            password: true,
            unit: {
                select: {
                    id: true,
                    name: true
                },
            },
            roles: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
    });
};

export const getByUsername = async (username : string): Promise<Employee | null> => {
    return database.employee.findUnique({
        where: { username: username },
        select: {
            id: true,
            name: true,
            username: true,
            password: true,
            unit: {
                select: {
                    id: true,
                    name: true
                },
            },
            roles: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
    });
};

export const count = async (): Promise<number> => {
    return database.employee.count();
}

export { _delete as delete };