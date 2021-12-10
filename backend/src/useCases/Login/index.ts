import { AdminRepository } from "../../Repositories/AdminRepository/AdminRepository";
import { LoginUseCase } from "./LoginUseCase";
import { LoginController } from "./LoginController";

const adminRepository = new AdminRepository()
const loginUseCase = new LoginUseCase(adminRepository)
const loginController = new LoginController(loginUseCase)

export { loginController }