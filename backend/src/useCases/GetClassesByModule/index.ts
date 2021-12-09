import { ClassRepository } from "../../Repositories/ClassRepository/ClassRepository";
import { GetClassesByModulesController } from "./GetClassesByModuleController";
import { GetClassesByModulesUseCase } from "./GetClassesByModuleUseCase";

const classRepository = new ClassRepository()
const getClassesByModuleUseCase = new GetClassesByModulesUseCase(classRepository)
const getClassesByModulesController = new GetClassesByModulesController(getClassesByModuleUseCase)

export { getClassesByModulesController }