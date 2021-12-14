import { Admin } from "../../Entities/Admin";

export interface IAdminRepository{
    getAll() : Promise<Admin[]>
    findByEmail(email: string) : Promise<Admin>
    save(admin: Admin) : Promise<Admin>
}