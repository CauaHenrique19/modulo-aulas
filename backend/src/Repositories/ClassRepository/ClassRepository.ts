import { Class } from "../../Entities/Class";
import { IClassRepository } from "./IClassRepository";
import knex from '../../database/connection'

export class ClassRepository implements IClassRepository{
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
}