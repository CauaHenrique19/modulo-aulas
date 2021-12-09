import { IGetAllModulesDTO } from "../../DTO/IGetAllModulesDTO";
import { Module } from "../../Entities/Module";

export interface IModuleRepository{
    getAll() : Promise<IGetAllModulesDTO[]>
    save(module: Module) : Promise<Module>
    update(module: Module) : Promise<Module>
    delete(id: string) : Promise<void>
}