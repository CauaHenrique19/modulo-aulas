import { Request, Response } from "express";
import { GetAllModulesUseCase } from "./GetAllModulesUseCase";

export class GetAllModulesController{
    constructor(private getAllModulesUseCase: GetAllModulesUseCase){}

    async handle(request: Request, response: Response){
        try{
            const modules = await this.getAllModulesUseCase.execute()
            response.json(modules)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao pegar os módulos!', error: error.message })
        }
    }
}