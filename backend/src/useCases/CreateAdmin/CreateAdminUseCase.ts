import { Admin } from "../../Entities/Admin";
import { AdminRepository } from "../../Repositories/AdminRepository/AdminRepository";
import { ICreateAdminDTO } from "./ICreateAdminDTO";
import bcrypt from 'bcrypt'

export class CreateAdminUseCase{
    constructor(private adminRepository : AdminRepository){}

    async execute(admin: ICreateAdminDTO) : Promise<Admin>{
        if(!admin.name) throw new Error('Informe o nome!')
        if(!admin.email) throw new Error('Informe o email!')
        if(!admin.password) throw new Error('Informe a senha!')
        if(!admin.confirmPassword) throw new Error('Informe a confirmação de senha!')
        if(admin.password !== admin.confirmPassword) throw new Error('Senhas não conferem!')

        const adminByEmail = await this.adminRepository.findByEmail(admin.email)
        if(adminByEmail) throw new Error('Usuário com esse e-mail já existente!')

        const salt = await bcrypt.genSalt(10)
        const encrypedPassword = await bcrypt.hash(admin.password, salt)

        const adminEntity = new Admin({ email: admin.email, name: admin.name, password: encrypedPassword })
        const insertedAdmin = await this.adminRepository.save(adminEntity)

        return insertedAdmin
    }
}