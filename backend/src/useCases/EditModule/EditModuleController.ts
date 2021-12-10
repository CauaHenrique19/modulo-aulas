import { Request, Response } from "express";
import { EditModuleUseCase } from "./EditModuleUseCase";
import { IEditModuleDTO } from "./IEditModuleDTO";

export class EditModuleController{
    constructor(private editModuleUseCase : EditModuleUseCase){}

    async handle (request: Request, response: Response) {
        try{
            const { id, name } : IEditModuleDTO = request.body
            const module = await this.editModuleUseCase.execute({ id, name })
            response.json(module)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao criar um módulo!', error: error.message })
        }
    }
}