import { AdminRepository } from "../../Repositories/AdminRepository/AdminRepository";
import { GetAllAdminsController } from "./GetAllAdminsController";
import { GetAllAdminsUseCase } from "./GetAllAdminsUseCase";

const adminRepository = new AdminRepository()
const getAllAdminsUseCase = new GetAllAdminsUseCase(adminRepository)
const getAllAdminsController = new GetAllAdminsController(getAllAdminsUseCase)

export { getAllAdminsController }