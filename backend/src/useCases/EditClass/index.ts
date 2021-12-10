import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { EditClassController } from "./EditClassController";
import { EditClassUseCase } from "./EditClassUseCase";

const classRepository = new ClassRepository()
const editClassUseCase = new EditClassUseCase(classRepository)
const editClassController = new EditClassController(editClassUseCase)

export { editClassController }