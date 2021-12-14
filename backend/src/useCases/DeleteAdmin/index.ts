import { AdminRepository } from "../../Repositories/AdminRepository/AdminRepository";
import { DeleteAdminController } from "./DeleteAdminController";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

const adminRepository = new AdminRepository()
const deleteAdminUseCase = new DeleteAdminUseCase(adminRepository)
const deleteAdminController = new DeleteAdminController(deleteAdminUseCase)

export { deleteAdminController }