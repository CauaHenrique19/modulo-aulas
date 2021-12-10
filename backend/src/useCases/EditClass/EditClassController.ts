import { Request, Response } from "express";
import { EditClassUseCase } from "./EditClassUseCase";
import { IEditClassDTO } from "./IEditClassDTO";

export class EditClassController{
    constructor(private editClassUseCase : EditClassUseCase){}

    async handle(request: Request, response: Response) {
        try{
            const { id, name, module_id, url_video, date } : IEditClassDTO = request.body
            const updatedClass = await this.editClassUseCase.execute({ id, name, module_id, url_video, date })
            response.json(updatedClass)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao editar uma aula!', error: error.message })
        }
    }
}