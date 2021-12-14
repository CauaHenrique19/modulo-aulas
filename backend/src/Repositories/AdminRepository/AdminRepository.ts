import { Admin } from "../../Entities/Admin";
import { IAdminRepository } from "./IAdminRepository";
import knex from '../../database/connection'

export class AdminRepository implements IAdminRepository{
    async getAll(): Promise<Admin[]> {
        const admins = await knex('admins')
            .select('id', 'name', 'email')

        return admins
    }

    async findByEmail(email: string): Promise<Admin> {
        const admin = await knex('admins')
            .select('*')
            .where({ email })
            .first()

        return admin
    }

    async save(admin: Admin): Promise<Admin> {
        const [returnedAdmin] = await knex('admins')
            .insert(admin, ['id', 'name', 'email'])

        return returnedAdmin
    }

    async delete(id: string): Promise<void> {
        await knex('admins')
            .delete()
            .where({ id })
    }
}