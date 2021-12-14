import { Admin } from "../../Entities/Admin";
import { IAdminRepository } from "../../Repositories/AdminRepository/IAdminRepository";

export class GetAllAdminsUseCase{
    constructor(private adminRepository : IAdminRepository){}

    async execute() : Promise<Admin[]>{
        const admins = await this.adminRepository.getAll()
        return admins
    }
}