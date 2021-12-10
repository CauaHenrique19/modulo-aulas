import { randomUUID } from "crypto";

export class Class{
    public readonly id?: string
    public name: string
    public module_id: string
    public url_video: string
    public date: Date

    constructor(props: Omit<Class, 'id'>, id?: string){
        Object.assign(this, props)

        this.id = id ? id : randomUUID()
    }
}