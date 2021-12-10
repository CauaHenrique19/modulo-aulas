import { randomUUID } from "crypto";

export class Module{
    public readonly id: string
    public name: string

    constructor(props: Omit<Module, 'id'>, id?: string){
        Object.assign(this, props)

        this.id = id ? id : randomUUID()
    }
}