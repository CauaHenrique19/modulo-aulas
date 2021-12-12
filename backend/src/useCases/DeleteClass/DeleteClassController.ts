import { Request, Response } from "express";
import { DeleteClassUseCase } from "./DeleteClassUseCase";
import { IDeleteClassDTO } from "./IDeleteClassDTO";

export class DeleteClassController{
    constructor(private deleteClassUseCase : DeleteClassUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { id, key_image } : IDeleteClassDTO = request.body
            await this.deleteClassUseCase.execute({ id, key_image })
            response.json({ message: 'Aula excluída com sucesso!' })
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao excluir uma aula!', error: error.message })
        }
    }
}