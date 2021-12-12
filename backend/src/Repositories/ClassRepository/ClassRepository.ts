import { Class } from "../../Entities/Class";
import { IClassRepository } from "./IClassRepository";
import { IGetAllClassesDTO } from "../../DTO/IGetAllClassesDTO";
import knex from '../../database/connection'

export class ClassRepository implements IClassRepository{
    async getAll(): Promise<IGetAllClassesDTO[]> {
        const classes = await knex('classes')
            .select('classes.*', 'modules.name as module_name')
            .innerJoin('modules', 'modules.id', 'classes.module_id')

        return classes
    }

    async getByModule(module_id: string): Promise<Class[]> {
        const classes = await knex('classes')
            .select('*')
            .where({ module_id })
            .orderBy('name')

        return classes
    }

    async save(data: Class): Promise<Class> {
        const [insertedClass] = await knex('classes')
            .insert(data, '*')
        
        return insertedClass
    }

    async update(data: Class): Promise<Class> {
        const [updatedClass] = await knex('classes')
            .update(data, '*')
            .where({ id: data.id })

        return updatedClass
    }

    async delete(id: string): Promise<void> {
        await knex('classes')
            .delete()
            .where({ id })
    }
}