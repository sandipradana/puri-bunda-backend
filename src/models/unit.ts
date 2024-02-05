import { database } from "../libraries/database";

export type Unit = {
    id: number;
    name: string;
};

export const create = async (unit: Unit): Promise<Unit> => {
    return database.unit.create({
        data: {
            name: unit.name,
        },
        select: {
            id: true,
            name: true
        },
    });
};

export const get = async (UnitId: number): Promise<Unit | null> => {
    return database.unit.findUnique({
        where: { id: UnitId },
        select: {
            id: true,
            name: true,
        },
    });
};

export const update = async (id: number, unit: Unit): Promise<Unit | null> => {
    return database.unit.update({
        where: {
            id: id
        },
        data: {
            name: unit.name,
        },
        select: {
            id: true,
            name: true,
        },
    });
};

export const _delete = async (id: number): Promise<void> => {
    await database.unit.delete({
        where: { id: id },
    });
};

export const list = async (): Promise<Unit[]> => {
    return database.unit.findMany({
        select: {
            id: true,
            name: true,
        },
    });
};

export const count = async (): Promise<number> => {
    return database.unit.count();
}


export { _delete as delete };