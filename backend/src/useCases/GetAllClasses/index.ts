import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { GetAllClassesController } from "./GetAllClassesController";
import { GetAllClassesUseCase } from "./GetAllClassesUseCase";

const classRepository = new ClassRepository()
const getAllClassesUseCase = new GetAllClassesUseCase(classRepository)
const getAllClassesController = new GetAllClassesController(getAllClassesUseCase)

export { getAllClassesController }