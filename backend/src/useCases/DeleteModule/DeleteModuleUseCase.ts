import { IModuleRepository } from "../../Repositories/ModuleRepository/IModuleRepository";

export class DeleteModuleUseCase{
    constructor(private moduleRepository : IModuleRepository){}

    async execute(id: string) : Promise<void>{
       if(!id) throw new Error('Informe o id do módulo!')
       await this.moduleRepository.delete(id)
    }
}