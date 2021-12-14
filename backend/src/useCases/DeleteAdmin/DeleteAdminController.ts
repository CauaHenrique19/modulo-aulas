import { Request, Response } from "express";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

export class DeleteAdminController{
    constructor(private deleteAdminUseCase : DeleteAdminUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { id } = request.body
            await this.deleteAdminUseCase.execute(id)
            response.json({ message: 'Admin excluído com sucesso!' })
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao excluir um admin!', error: error.message })
        }
    }
}