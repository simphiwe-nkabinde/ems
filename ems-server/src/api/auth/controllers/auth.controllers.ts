import { Request, Response } from 'express';

export function login(req: Request, res: Response) {
    const { email, password } = req.body;
    return res.status(200).send({email, password});
}