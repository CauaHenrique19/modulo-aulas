import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('admins').del();

    // Inserts seed entries
    await knex('admins').insert([
        { 
            id: '33df8cb2-5bd0-4508-949a-d04a682b1bbc', 
            name: 'Teste', 
            email: 'teste@teste.com', 
            password: '$2b$10$MuMThAD6g8nb0xcV9yu9H.Wnui9TkrbozpkqSR1I0nxLsAzEA4nqW' 
        }
    ]);
};
