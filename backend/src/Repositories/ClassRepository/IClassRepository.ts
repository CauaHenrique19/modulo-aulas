import { Class } from "../../Entities/Class"

export interface IClassRepository{
    save(data: Class) : Promise<Class>
}