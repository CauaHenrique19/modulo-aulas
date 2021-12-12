import { Class } from "../../Entities/Class";
import { FileUploader, IUpdateFile } from "../../Providers/IFileUpload";
import { IClassRepository } from "../../Repositories/ClassRepository/IClassRepository";
import { IEditClassDTO } from "./IEditClassDTO";

export class EditClassUseCase{
    constructor(
        private classRepository : IClassRepository,
        private uploadProvider : FileUploader
    ){}

    async execute(data: IEditClassDTO, file: IUpdateFile) : Promise<Class>{
        if(!data.id) throw new Error('Informe o id da aula!')
        if(!data.name) throw new Error('Informe o nome da aula!')
        if(!data.module_id) throw new Error('Informe o módulo da aula!')
        if(!data.description) throw new Error('Informe a descrição da aula!')
        if(!data.url_video) throw new Error('Informe a url do vídeo da aula!')
        if(!data.date) throw new Error('Informe a data em que a aula ocorrerá!')
        if(!data.url_image) throw new Error('Informe a url da imagem da aula!')
        if(!data.key_image) throw new Error('Informe a chave da imagem da aula!')

        if(file.content){
            await this.uploadProvider.update(file)
        }

        const classEntity = new Class({
            name: data.name, 
            module_id: data.module_id, 
            description: data.description,
            url_video: data.url_video, 
            key_image: data.key_image,
            url_image: data.url_image,
            date: data.date
        }, data.id)

        const updatedClass = await this.classRepository.update(classEntity)
        return updatedClass;
    }
}