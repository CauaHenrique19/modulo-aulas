import { ModuleRepository } from "../../Repositories/ModuleRepository/ModuleRepository";
import { GetAllModulesUseCase } from "./GetAllModulesUseCase";
import { GetAllModulesController } from "./GetAllModulesController";

const moduleRepository = new ModuleRepository()
const getAllModulesUseCase = new GetAllModulesUseCase(moduleRepository)
const getAllModulesController = new GetAllModulesController(getAllModulesUseCase)

export { getAllModulesController }