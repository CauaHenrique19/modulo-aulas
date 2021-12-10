import { Class } from "../../Entities/Class"

export interface IClassRepository{
    save(data: Class) : Promise<Class>
    getByModule(module_id: string) : Promise<Class[]>
    update(data: Class) : Promise<Class>
}