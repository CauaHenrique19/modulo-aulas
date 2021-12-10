import { NextFunction, Request, Response } from "express"
import { Admin } from "../Entities/Admin"
import jwt from 'jsonwebtoken'
import knex from '../database/connection'

interface EncodeResult{
    id: string
}

export const isAdmin = async (request: Request, response: Response, next: NextFunction) => {
    const { authorization } = request.headers
    if(!authorization || !authorization.startsWith('Bearer')) return response.status(400).json({ message: 'Token não informado!' })

    const token = authorization.substring(authorization.indexOf(' ')).trim()

    try{
        const payLoad = jwt.verify(token, process.env.SECRET) as EncodeResult
        
        const admin = await knex<Admin>('admins')
            .select('email')
            .where({ id: payLoad.id })
            .first()

        if(!admin.email) return response.status(400).json({ message: 'Usuário não possui permissão!' })

        next()
    }
    catch(error){
        return response.status(400).json({ message: 'Token inválido!' })
    }
}