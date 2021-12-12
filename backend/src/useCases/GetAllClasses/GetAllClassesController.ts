import { Request, Response } from "express";
import { GetAllClassesUseCase } from "./GetAllClassesUseCase";

export class GetAllClassesController{
    constructor(private getAllClassesUseCase : GetAllClassesUseCase){}

    async handle(request: Request, response: Response){
        try{
            const classes = await this.getAllClassesUseCase.execute()
            response.json(classes)
        }
        catch(error){
            return response.status(500).json({ message: 'Ocorreu um erro ao pegar as aulas!', error: error.message })
        }
    }
}