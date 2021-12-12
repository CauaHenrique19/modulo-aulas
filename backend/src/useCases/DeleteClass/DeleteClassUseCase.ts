import { FileUploader } from "../../Providers/IFileUpload";
import { IClassRepository } from "../../Repositories/ClassRepository/IClassRepository";
import { IDeleteClassDTO } from "./IDeleteClassDTO";

export class DeleteClassUseCase{
    constructor(
        private classRepository : IClassRepository,
        private uploadProvider : FileUploader
    ){}

    async execute(data: IDeleteClassDTO) : Promise<void>{
        if(!data.id) throw new Error('Informe o id da aula!')
        if(!data.key_image) throw new Error('Informe a chave da imagem da aula!')

        await this.uploadProvider.delete(data.key_image)
        await this.classRepository.delete(data.id)
    }
}