export interface IFile{
    name: string
    type: string
    content: ArrayBuffer
}

export interface IUpdateFile{
    key: string
    type: string
    content: ArrayBuffer
}

export interface IUploadedFile{
    Key: string
    Location: string
}

export interface FileUploader{
    upload(file: IFile) : Promise<IUploadedFile>
    update(file: IUpdateFile) : Promise<void>
    delete(key: string) : Promise<void>
}