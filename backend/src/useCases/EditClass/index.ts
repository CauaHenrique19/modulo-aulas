import { AWSUploadProvider } from "../../Providers/Implementations/AWSUploadProvider";
import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { EditClassController } from "./EditClassController";
import { EditClassUseCase } from "./EditClassUseCase";

const classRepository = new ClassRepository()
const awsUploadProvider = new AWSUploadProvider()
const editClassUseCase = new EditClassUseCase(classRepository, awsUploadProvider)
const editClassController = new EditClassController(editClassUseCase)

export { editClassController }