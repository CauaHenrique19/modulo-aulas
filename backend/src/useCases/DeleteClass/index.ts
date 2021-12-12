import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { DeleteClassController } from "./DeleteClassController";
import { DeleteClassUseCase } from "./DeleteClassUseCase";

const classRepository = new ClassRepository()
const awsUploadProvider = new AWSUploadProvider()
const deleteClassUseCase = new DeleteClassUseCase(classRepository, awsUploadProvider)
const deleteClassController = new DeleteClassController(deleteClassUseCase)

export { deleteClassController }