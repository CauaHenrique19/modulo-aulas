import { Request, Response } from "express"
import { CreateAdminUseCase } from "./CreateAdminUseCase"
import { ICreateAdminDTO } from "./ICreateAdminDTO"

export class CreateAdminController{
    constructor(private createAdminUseCase : CreateAdminUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { name, email, password, confirmPassword } : ICreateAdminDTO = request.body
            const insertedAdmin = await this.createAdminUseCase.execute({ name, email, password, confirmPassword })
            response.json(insertedAdmin)
        }
        catch(error){
            response.status(500).json({ message: 'Ocorreu um erro ao criar admin!', error: error.message })
        }
    }
}