import { IGetAllClassesDTO } from "../../DTO/IGetAllClassesDTO"
import { Class } from "../../Entities/Class"

export interface IClassRepository{
    save(data: Class) : Promise<Class>
    getByModule(module_id: string) : Promise<Class[]>
    getAll() : Promise<IGetAllClassesDTO[]>
    update(data: Class) : Promise<Class>
    delete(id: string) : Promise<void>
}