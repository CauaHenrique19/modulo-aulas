import { IAdminRepository } from "../../Repositories/AdminRepository/IAdminRepository";
import { IAutheticatedUserDTO } from "./IAuthenticatedUserDTO";
import { ILoginDTO } from "./ILoginDTO";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class LoginUseCase{
    constructor(private adminRepository : IAdminRepository){}

    async execute(login: ILoginDTO) : Promise<IAutheticatedUserDTO>{
        const admin = await this.adminRepository.findByEmail(login.email)
        if(!admin) throw new Error('Usuário não encontrado!')

        const auth = await bcrypt.compare(login.password, admin.password)
        if(!auth) throw new Error('Senha Inválida!')

        const token = jwt.sign({ id: admin.id }, process.env.SECRET)
        delete admin.password

        const authenticatedUser : IAutheticatedUserDTO = {
            auth: true,
            admin,
            token
        }

        return authenticatedUser
    }
}