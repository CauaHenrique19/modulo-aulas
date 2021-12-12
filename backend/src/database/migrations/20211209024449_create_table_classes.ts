import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('classes', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('name').notNullable()
        table.string('module_id').references('id').inTable('modules').notNullable()
        table.text('description').notNullable()
        table.string('url_video').notNullable()
        table.string('key_image').notNullable()
        table.string('url_image').notNullable()
        table.timestamp('date').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('classes')
}