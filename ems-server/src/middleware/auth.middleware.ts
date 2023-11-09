import  jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

export function authenticated(req: Request, res: Response, next: NextFunction) {
    let token = req.cookies.USER_TOKEN
    if (token) {
        let decoded = jwt.verify(token, 'w')
        if (decoded) {
            if (decoded.role === 'admin') {
                req.user = decoded
                next()
            }
        } else {
            return res.status(403).json({error: 'token invalid. Please Login'})
        }
    }
    else {
        res.status(403).json({error: 'token not found. Please Login'})
    }
}