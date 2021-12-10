import { ModuleRepository } from "../../Repositories/ModuleRepository/ModuleRepository";
import { EditModuleController } from "./EditModuleController";
import { EditModuleUseCase } from "./EditModuleUseCase";

const moduleRepository = new ModuleRepository()
const editModuleUseCase = new EditModuleUseCase(moduleRepository)
const editModuleController = new EditModuleController(editModuleUseCase)

export { editModuleController }