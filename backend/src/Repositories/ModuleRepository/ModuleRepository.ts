import { Module } from "../../Entities/Module";
import { IModuleRepository } from "./IModuleRepository";
import { IGetAllModulesDTO } from "../../DTO/IGetAllModulesDTO";
import knex from '../../database/connection'

export class ModuleRepository implements IModuleRepository{
    async getAll(): Promise<IGetAllModulesDTO[]> {
        const modules = await knex<IGetAllModulesDTO>('modules')
            .select('modules.*')
            .count('classes.module_id as quantity_classes')
            .leftJoin('classes', 'classes.module_id', 'modules.id')
            .groupBy('modules.id')
            .orderBy('modules.name')

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
            .where({ id: module.id })

        return updatedModule
    }

    async delete(id: string): Promise<void> {
        await knex('classes')
            .delete()
            .where({ module_id: id })

        await knex('modules')
            .delete()
            .where({ id })
    }
}