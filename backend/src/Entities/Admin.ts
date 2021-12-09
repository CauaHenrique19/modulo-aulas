import { randomUUID } from "crypto"

export class Admin{
    public readonly id?: string
    public email: string
    public password?: string
    public name: string

    constructor(props: Omit<Admin, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = randomUUID()
        }
    }
}