import { Class } from "../../Entities/Class";
import { FileUploader, IFile, IUploadedFile } from "../../Providers/IFileUpload";
import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { ICreateClassDTO } from "./ICreateClassDTO";

export class CreateClassUseCase{
    constructor(
        private classRepository : ClassRepository,
        private uploadProvider : FileUploader
    ){}

    async execute(data: ICreateClassDTO, file: IFile) : Promise<Class>{
        if(!data.name) throw new Error('Informe o nome da aula!')
        if(!data.module_id) throw new Error('Informe o módulo da aula!')
        if(!data.url_video) throw new Error('Informe a url do vídeo da aula!')
        if(!data.date) throw new Error('Informe a data em que a aula ocorrerá!')
        if(!data.description) throw new Error('Informe a descrição da aula!')
        if(!file.content) throw new Error('Informe a imagem da aula!')

        const { Key, Location } : IUploadedFile = await this.uploadProvider.upload(file)

        const classEntity = new Class({ 
            name: data.name, 
            module_id: data.module_id, 
            description: data.description,
            date: data.date,
            url_video: data.url_video,
            key_image: Key,
            url_image: Location
        })

        const insertedClass = await this.classRepository.save(classEntity)
        return insertedClass
    }
}