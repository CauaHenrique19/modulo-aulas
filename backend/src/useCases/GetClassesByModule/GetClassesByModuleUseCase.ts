import { Class } from "../../Entities/Class";
import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";

export class GetClassesByModulesUseCase{
    constructor(private classRepository : ClassRepository){}

    async execute(module_id: string) : Promise<Class[]>{
        if(!module_id) throw new Error('Informe o módulo!')
        
        const classes = await this.classRepository.getByModule(module_id)
        return classes
    }
}