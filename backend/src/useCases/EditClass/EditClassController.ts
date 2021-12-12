import { Request, Response } from "express";
import { IUpdateFile } from "../../Providers/IFileUpload";
import { EditClassUseCase } from "./EditClassUseCase";
import { IEditClassDTO } from "./IEditClassDTO";

export class EditClassController{
    constructor(private editClassUseCase : EditClassUseCase){}

    async handle(request: Request, response: Response) {
        try{
            const { id, name, module_id, description, key_image, url_image, url_video, date } : IEditClassDTO = request.body
            const file : IUpdateFile = {
                key: key_image,
                content: request.file ? request.file.buffer : undefined,
                type: request.file ? request.file.mimetype : ''
            }

            const updatedClass = await this.editClassUseCase.execute(
                { id, name, module_id, description, url_video, date, key_image, url_image },
                file
            )

            response.json(updatedClass)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao editar uma aula!', error: error.message })
        }
    }
}