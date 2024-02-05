import { Request, Response } from 'express';

import * as unitModel from "../models/unit";

export async function list(request: Request, response: Response) {
    try {
        const units = await unitModel.list();
        return response.status(200).json({ data: units });
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function get(request: Request, response: Response) {
    const id: number = parseInt(request.params.id, 10);

    try {
        const unit = await unitModel.get(id);
        return response.status(200).json(unit);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function create(request: Request, response: Response) {
    try {
        const unit = request.body;
        const newunit = await unitModel.create(unit);
        return response.status(200).json(newunit);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function update(request: Request, response: Response) {
    try {
        const unit = request.body;
        const newunit = await unitModel.create(unit);
        return response.status(200).json(newunit);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function _delete(request: Request, response: Response): Promise<void> {
    const id: number = parseInt(request.params.id, 10);
    try {
        const unit = await unitModel._delete(id);
        response.status(204).json("Unit was successfully deleted");
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}

export async function count(request: Request, response: Response): Promise<void> {
    try {
        const count = await unitModel.count()
        response.status(200).json({ data: { total: count } });
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}

export { _delete as delete };