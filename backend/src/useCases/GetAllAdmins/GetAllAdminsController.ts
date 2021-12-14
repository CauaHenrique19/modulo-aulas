import { Request, Response } from "express";
import { GetAllAdminsUseCase } from "./GetAllAdminsUseCase";

export class GetAllAdminsController{
    constructor(private getAllAdminsUseCase : GetAllAdminsUseCase){}

    async handle(request: Request, response: Response) {
        try{
            const admins = await this.getAllAdminsUseCase.execute()
            response.json(admins)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao pegar os admins!', error: error.message })
        }
    }
}