import { Admin } from "../../Entities/Admin";

export interface IAdminRepository{
    findByEmail(email: string) : Promise<Admin>
    save(admin: Admin) : Promise<Admin>
}