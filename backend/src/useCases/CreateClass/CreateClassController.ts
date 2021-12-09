import { Request, Response } from "express";
import { CreateClassUseCase } from "./CreateClassUseCase";
import { ICreateClassDTO } from "./ICreateClassDTO";

export class CreateClassController{
    constructor(private createClassUseCase : CreateClassUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { name, module_id, url_video, date } : ICreateClassDTO = request.body
            const insertedClass = await this.createClassUseCase.execute({ name, module_id, url_video, date })
            response.json(insertedClass)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao criar uma aula!', error: error.message })
        }
    }
}