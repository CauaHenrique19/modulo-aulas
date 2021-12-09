import { Class } from "../../Entities/Class";
import { IClassRepository } from "./IClassRepository";
import knex from '../../database/connection'

export class ClassRepository implements IClassRepository{
    async save(data: Class): Promise<Class> {
        const [insertedClass] = await knex('classes')
            .insert(data, '*')
        
        return insertedClass
    }
}