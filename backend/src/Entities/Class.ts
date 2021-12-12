import { randomUUID } from "crypto";

export class Class{
    public readonly id?: string
    public name: string
    public module_id: string
    public description: string
    public url_video: string
    public readonly key_image: string
    public url_image: string
    public date: Date

    constructor(props: Omit<Class, 'id'>, id?: string){
        Object.assign(this, props)

        this.id = id ? id : randomUUID()
    }
}