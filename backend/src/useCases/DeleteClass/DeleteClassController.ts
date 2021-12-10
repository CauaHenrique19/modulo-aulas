import { Request, Response } from "express";
import { DeleteClassUseCase } from "./DeleteClassUseCase";

export class DeleteClassController{
    constructor(private deleteClassUseCase : DeleteClassUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { id } = request.params
            await this.deleteClassUseCase.execute(id)
            response.json({ message: 'Aula excluída com sucesso!' })
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao excluir uma aula!', error: error.message })
        }
    }
}