import { Class } from "../../Entities/Class";
import { IClassRepository } from "../../Repositories/ClassRepository/IClassRepository";

export class GetClassesByModulesUseCase{
    constructor(private classRepository : IClassRepository){}

    async execute(module_id: string) : Promise<Class[]>{
        if(!module_id) throw new Error('Informe o módulo!')
        
        const classes = await this.classRepository.getByModule(module_id)
        return classes
    }
}