import { Class } from "../../Entities/Class";
import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { ICreateClassDTO } from "./ICreateClassDTO";

export class CreateClassUseCase{
    constructor(private classRepository : ClassRepository){}

    async execute(data: ICreateClassDTO) : Promise<Class>{
        if(!data.name) throw new Error('Informe o nome da aula!')
        if(!data.module_id) throw new Error('Informe o módulo da aula!')
        if(!data.url_video) throw new Error('Informe a url do vídeo da aula!')
        if(!data.date) throw new Error('Informe a data em que a aula ocorrerá!')

        const classEntity = new Class(data)
        const insertedClass = await this.classRepository.save(classEntity)
        return insertedClass
    }
}