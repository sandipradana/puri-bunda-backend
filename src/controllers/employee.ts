import { Request, Response } from 'express';

import * as userModel from "../models/employee";
import * as authHistoryModel from "../models/auth-history";

import jwt from 'jsonwebtoken';

export async function list(request: Request, response: Response) {
    try {
        const employees = await userModel.list();
        return response.status(200).json({ data: employees });
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function get(request: Request, response: Response) {
    const id: number = parseInt(request.params.id, 10);

    try {
        const employee = await userModel.get(id);
        return response.status(200).json(employee);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function create(request: Request, response: Response) {
    try {
        const employeeRequest = request.body;
        const newEmployee = await userModel.create(employeeRequest);
        return response.status(200).json(newEmployee);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function update(request: Request, response: Response) {
    const id: number = parseInt(request.params.id, 10);
    try {
        const employee = request.body;
        const newEmployee = await userModel.update(id, employee);
        return response.status(200).json(newEmployee);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
}

export async function _delete(request: Request, response: Response): Promise<void> {
    const id: number = parseInt(request.params.id, 10);
    try {
        const employee = await userModel._delete(id);
        response.status(204).json("Object was successfully deleted");
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}

export async function login(request: Request, response: Response): Promise<void> {
    try {
        const login = request.body;
        const employee = await userModel.getByUsername(login.username)

        if (employee) {
            if (login.password == employee.password) {
                authHistoryModel.create({employee_id:employee.id})
                const token = jwt.sign({ username: employee.username }, 'ini-secret', { expiresIn: '1h' });
                response.status(200).json({ data: { token: token } });
            } else {
                response.status(400).json("username or password invalid");
            }
        } else {
            response.status(400).json("username or password invalid");
        }
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}

export async function count(request: Request, response: Response): Promise<void> {
    try {
        const count = await userModel.count()
        response.status(200).json({ data: { total: count } });
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}

export async function countLoginHistory(request: Request, response: Response): Promise<void> {
    try {
        const count = await userModel.count()
        response.status(200).json({ data: { total: count } });
    } catch (error: any) {
        response.status(500).json(error.message);
    }
}

export { _delete as delete };