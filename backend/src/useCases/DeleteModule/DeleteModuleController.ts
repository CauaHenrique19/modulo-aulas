import { Request, Response } from "express";
import { DeleteModuleUseCase } from "./DeleteModuleUseCase";

export class DeleteModuleController{
    constructor(private deleteModuleUseCase : DeleteModuleUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { id } = request.params
            await this.deleteModuleUseCase.execute(id)
            response.json({ message: 'Módulo excluído com sucesso!' })
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao excluir um módulo!', error: error.message })
        }
    }
}