import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { CreateClassUseCase } from "./CreateClassUseCase";
import { CreateClassController } from "./CreateClassController";
import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";

const classRepository = new ClassRepository()
const awsUplodProvider = new AWSUploadProvider()
const createClassUseCase = new CreateClassUseCase(classRepository, awsUplodProvider)
const createClassController = new CreateClassController(createClassUseCase)

export { createClassController }