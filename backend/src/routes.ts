import { Router } from 'express'
import { createAdminController } from './useCases/CreateAdmin'
import { createClassController } from './useCases/CreateClass'
import { createModuleController } from './useCases/CreateModule'
import { getAllModulesController } from './useCases/GetAllModules'
import { getClassesByModulesController } from './useCases/GetClassesByModule'
import { loginController } from './useCases/Login'

const router = Router()

router.post('/signup', (req, res) => createAdminController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

router.get('/modules', (req, res) => getAllModulesController.handle(req, res))
router.post('/modules', (req, res) => createModuleController.handle(req, res))

router.get('/classes/:module_id', (req, res) => getClassesByModulesController.handle(req, res))
router.post('/classes', (req, res) => createClassController.handle(req, res))

export { router }