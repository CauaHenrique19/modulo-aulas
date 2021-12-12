import { Request, Response } from "express";
import { IFile } from "../../Providers/IFileUpload";
import { CreateClassUseCase } from "./CreateClassUseCase";
import { ICreateClassDTO } from "./ICreateClassDTO";

export class CreateClassController{
    constructor(private createClassUseCase : CreateClassUseCase){}

    async handle(request: Request, response: Response){
        try{
            const { name, module_id, url_video, date, description } : ICreateClassDTO = request.body
            const file : IFile = {
                name: request.file ? request.file.originalname : '',
                content: request.file ? request.file.buffer : undefined,
                type: request.file ? request.file.mimetype : ''
            }

            const insertedClass = await this.createClassUseCase.execute({ name, module_id, url_video, date, description }, file)
            response.json(insertedClass)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao criar uma aula!', error: error.message })
        }
    }
}