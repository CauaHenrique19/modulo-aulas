import { Request, Response } from "express";
import { GetClassesByModulesUseCase } from "./GetClassesByModuleUseCase";

export class GetClassesByModulesController{
    constructor(private getClassesByModuleUseCase : GetClassesByModulesUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { module_id } = request.params
            const classes = await this.getClassesByModuleUseCase.execute(module_id)
            response.json(classes)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao pegar as aulas!', error: error.message })
        }
    }
}