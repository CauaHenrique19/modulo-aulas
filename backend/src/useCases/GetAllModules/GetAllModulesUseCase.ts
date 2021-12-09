import { IGetAllModulesDTO } from "../../DTO/IGetAllModulesDTO";
import { IModuleRepository } from "../../Repositories/ModuleRepository/IModuleRepository";

export class GetAllModulesUseCase{
    constructor(private moduleRepository: IModuleRepository){}

    async execute() : Promise<IGetAllModulesDTO[]>{
        const modules = await this.moduleRepository.getAll()
        return modules
    }
}