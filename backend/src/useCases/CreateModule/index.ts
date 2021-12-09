import { ModuleRepository } from "../../Repositories/ModuleRepository/ModuleRepository";
import { CreateModuleUseCase } from "./CreateModuleUseCase";
import { CreateModuleController } from "./CreateModuleController";

const moduleRepository = new ModuleRepository()
const createModuleUseCase = new CreateModuleUseCase(moduleRepository)
const createModuleController = new CreateModuleController(createModuleUseCase)

export { createModuleController }