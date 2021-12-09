import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { CreateClassUseCase } from "./CreateClassUseCase";
import { CreateClassController } from "./CreateClassController";

const classRepository = new ClassRepository()
const createClassUseCase = new CreateClassUseCase(classRepository)
const createClassController = new CreateClassController(createClassUseCase)

export { createClassController }