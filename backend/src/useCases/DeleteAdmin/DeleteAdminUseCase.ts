import { IAdminRepository } from "../../Repositories/AdminRepository/IAdminRepository";

export class DeleteAdminUseCase{
    constructor(private adminRepository : IAdminRepository){}

    async execute(id: string) : Promise<void>{
        if(!id) throw new Error('Informe o id do admin!')
        await this.adminRepository.delete(id)
    }
}