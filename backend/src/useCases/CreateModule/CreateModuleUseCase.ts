import { Module } from "../../Entities/Module";
import { IModuleRepository } from "../../Repositories/ModuleRepository/IModuleRepository";
import { ICreateModuleDTO } from "./ICreateModuleDTO";

export class CreateModuleUseCase{
    constructor(private moduleRepository: IModuleRepository){}

    async execute(module: ICreateModuleDTO) : Promise<Module>{
        if(!module.name) throw new Error('Informe o nome do módulo!')

        const moduleEntity = new Module(module)
        const insertedModule = await this.moduleRepository.save(moduleEntity)
        
        return insertedModule
    }
}