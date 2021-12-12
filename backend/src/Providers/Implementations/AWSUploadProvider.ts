import { S3 } from "aws-sdk";
import { FileUploader, IFile, IUpdateFile, IUploadedFile } from "../IFileUpload";
import crypto from 'crypto'

export class AWSUploadProvider implements FileUploader{
    private client: S3;

    constructor(){
        this.client = new S3()
    }

    private generateFileKey(file: IFile, hash: string){
        return `${hash}-${file.name}`
    }

    async upload(file: IFile) : Promise<IUploadedFile> {
        const hash = crypto.randomBytes(16).toString('hex')
        const fileKey = this.generateFileKey(file, hash)

        const { Key, Location } : IUploadedFile = await this.client
            .upload({ 
                Bucket: 'modulo-aulas',
                Key: fileKey, 
                ContentType: file.type, 
                Body: file.content, 
                ACL: 'public-read' 
            })
            .promise()

        return { Key, Location }
    }

    async update(file: IUpdateFile): Promise<void> {
        await this.client.putObject({
            Bucket: 'modulo-aulas',
            Key: file.key,
            ContentType: file.type,
            Body: file.content,
            ACL: 'public-read'
        })
        .promise()
    }

    async delete(key: string) : Promise<void>{
        await this.client.deleteObject({ 
            Bucket: 'modulo-aulas', 
            Key: key 
        })
        .promise()
    }
}