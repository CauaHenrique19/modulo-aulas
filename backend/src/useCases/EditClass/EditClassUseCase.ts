import { Class } from "../../Entities/Class";
import { IClassRepository } from "../../Repositories/ClassRepository/IClassRepository";
import { IEditClassDTO } from "./IEditClassDTO";

export class EditClassUseCase{
    constructor(private classRepository : IClassRepository){}

    async execute(data: IEditClassDTO) : Promise<Class>{
        if(!data.id) throw new Error('Informe o id da aula!')
        if(!data.name) throw new Error('Informe o nome da aula!')
        if(!data.module_id) throw new Error('Informe o módulo da aula!')
        if(!data.url_video) throw new Error('Informe a url do vídeo da aula!')
        if(!data.date) throw new Error('Informe a data em que a aula ocorrerá!')

        const classEntity = new Class({ name: data.name, module_id: data.module_id, url_video: data.url_video, date: data.date }, data.id)
        const updatedClass = await this.classRepository.update(classEntity)

        return updatedClass;
    }
}