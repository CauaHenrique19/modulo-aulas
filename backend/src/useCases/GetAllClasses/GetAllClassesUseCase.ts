import { IGetAllClassesDTO } from "../../DTO/IGetAllClassesDTO";
import { IClassRepository } from "../../Repositories/ClassRepository/IClassRepository";

export class GetAllClassesUseCase{
    constructor(private classRepository : IClassRepository){}

    async execute() : Promise<IGetAllClassesDTO[]>{
        const classes = await this.classRepository.getAll()
        return classes
    }
}