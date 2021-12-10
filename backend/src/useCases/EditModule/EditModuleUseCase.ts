import { Module } from "../../Entities/Module";
import { IModuleRepository } from "../../Repositories/ModuleRepository/IModuleRepository";
import { IEditModuleDTO } from "./IEditModuleDTO";

export class EditModuleUseCase{
    constructor(private moduleRepository : IModuleRepository){}

    async execute(module: IEditModuleDTO) : Promise<Module>{
        if(!module.id) throw new Error('Informe o id do módulo!')
        if(!module.name) throw new Error('Informe o nome do módulo!')

        const moduleEntity = new Module({ name: module.name }, module.id)
        const updatedModule = await this.moduleRepository.update(moduleEntity)
        return updatedModule
    }
}