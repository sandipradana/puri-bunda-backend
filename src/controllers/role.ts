import { Request, Response } from 'express';

import * as roleModel from "../models/role";

export async function list(request: Request, response: Response) {
    try {
        const roles = await roleModel.list();
        return response.status(200).json({data:roles});
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function get(request: Request, response: Response) {
    const id: number = parseInt(request.params.id, 10);

    try {
        const role = await roleModel.get(id);
        return response.status(200).json(role);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function create(request: Request, response: Response) {
    try {
        const role = request.body;
        const newrole = await roleModel.create(role);
        return response.status(200).json(newrole);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function update(request: Request, response: Response) {
    try {
        const role = request.body;
        const newrole = await roleModel.create(role);
        return response.status(200).json(newrole);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function _delete(request: Request, response: Response): Promise<void> {
    const id: number = parseInt(request.params.id, 10);
    try {
        const role = await roleModel._delete(id);
        response.status(204).json("Role was successfully deleted");
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}

export async function count(request: Request, response: Response): Promise<void> {
    try {
        const count = await roleModel.count()
        response.status(200).json({ data: { total: count } });
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}

export { _delete as delete };