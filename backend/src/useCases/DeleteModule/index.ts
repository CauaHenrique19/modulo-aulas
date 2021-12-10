import { ModuleRepository } from "../../Repositories/ModuleRepository/ModuleRepository";
import { DeleteModuleController } from "./DeleteModuleController";
import { DeleteModuleUseCase } from "./DeleteModuleUseCase";

const moduleRepository = new ModuleRepository()
const deleteModuleUseCase = new DeleteModuleUseCase(moduleRepository)
const deleteModuleController = new DeleteModuleController(deleteModuleUseCase)

export { deleteModuleController }