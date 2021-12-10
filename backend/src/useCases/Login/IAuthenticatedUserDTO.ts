import { Admin } from "../../Entities/Admin"

export interface IAutheticatedUserDTO{
    admin: Admin
    auth: boolean
    token: string
}