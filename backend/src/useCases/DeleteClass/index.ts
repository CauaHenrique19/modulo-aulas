import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { DeleteClassController } from "./DeleteClassController";
import { DeleteClassUseCase } from "./DeleteClassUseCase";

const classRepository = new ClassRepository()
const deleteClassUseCase = new DeleteClassUseCase(classRepository)
const deleteClassController = new DeleteClassController(deleteClassUseCase)

export { deleteClassController }