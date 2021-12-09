import { Module } from "../../Entities/Module";
import { IModuleRepository } from "./IModuleRepository";
import knex from '../../database/connection'
import { IGetAllModulesDTO } from "../../DTO/IGetAllModulesDTO";

export class ModuleRepository implements IModuleRepository{
    async getAll(): Promise<IGetAllModulesDTO[]> {
        const modules = await knex<IGetAllModulesDTO>('modules')
            .select('modules.*')
            .count('classes.module_id as quantity_classes')
            .leftJoin('classes', 'classes.module_id', 'modules.id')
            .groupBy('modules.id')

        return modules
    }

    async save(module: Module): Promise<Module> {
        const [insertedModule] = await knex<Module>('modules')
            .insert(module, '*')
        
        return insertedModule
    }

    async update(module: Module): Promise<Module> {
        const [updatedModule] = await knex<Module>('modules')
            .update(module, '*')
        
        return updatedModule
    }

    async delete(id: string): Promise<void> {
        await knex('modules')
            .delete()
            .where({ id })
    }
}