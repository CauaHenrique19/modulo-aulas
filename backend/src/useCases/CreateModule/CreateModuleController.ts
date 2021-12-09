import { Request, Response } from "express";
import { CreateModuleUseCase } from "./CreateModuleUseCase";
import { ICreateModuleDTO } from "./ICreateModuleDTO";

export class CreateModuleController{
    constructor(private createModuleUseCase: CreateModuleUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { name } : ICreateModuleDTO = request.body
            const module = await this.createModuleUseCase.execute({ name })
            return response.json(module)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao criar um módulo!', error: error.message })
        }
    }
}