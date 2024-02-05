import { database } from "../libraries/database";

export type Role = {
    id: number;
    name: string;
};

export const create = async (role: Role): Promise<Role> => {
    return database.role.create({
        data: {
            name: role.name,
        },
        select: {
            id: true,
            name: true
        },
    });
};

export const get = async (roleId: number): Promise<Role | null> => {
    return database.role.findUnique({
        where: { id: roleId },
        select: {
            id: true,
            name: true,
        },
    });
};

export const update = async (id: number, role: Role): Promise<Role | null> => {
    return database.role.update({
        where: {
            id: id
        },
        data: {
            name: role.name,
        },
        select: {
            id: true,
            name: true,
        },
    });
};

export const _delete = async (id: number): Promise<void> => {
    await database.role.delete({
        where: { id: id },
    });
};

export const list = async (): Promise<Role[]> => {
    return database.role.findMany({
        select: {
            id: true,
            name: true,
        },
    });
};

export const count = async (): Promise<number> => {
    return database.role.count();
}


export { _delete as delete };