import { IClassRepository } from "../../Repositories/ClassRepository/IClassRepository";

export class DeleteClassUseCase{
    constructor(private classRepository : IClassRepository){}

    async execute(id: string) : Promise<void>{
        if(!id) throw new Error('Informe o id da aula!')
        await this.classRepository.delete(id)
    }
}