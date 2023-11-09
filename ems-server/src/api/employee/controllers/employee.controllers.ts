import { Employee } from './../models/employee.models';
import { Request, Response } from "express";

export function findAll(req: Request, res: Response) {
    const employees: Employee[] = [
        {
            id: 1,
            attributes: {
                name: 'jacob'
            }
        },
        {
            id: 2,
            attributes: {
                name: 'sally'
            }
        },
        {
            id: 2,
            attributes: {
                name: 'maya'
            }
        },
    ]
    return res.send({
        data: employees
    })
}
export function findOne(req: Request, res: Response) {
    const { id } = req.params
    const employee: Employee = {
        id: Number(id),
        attributes: {
            name: 'jacob'
        }
    }
    return res.send({
        data: employee
    })
}
export function create(req: Request, res: Response) {
    const { name } = req.body
    const employee: Employee = {
        id: 4,
        attributes: {
            name
        }
    }
    return res.send({
        data: employee
    })
}
export function update(req: Request, res: Response) {
    const { name } = req.body
    const employee: Employee = {
        id: 4,
        attributes: {
            name
        }
    }
    return res.send({
        data: employee
    })
}
export function remove(req: Request, res: Response) {
    const { id } = req.params
    return res.send({
        data: {
            id
        }
    })
}