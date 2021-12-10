import { Router } from 'express'
import { createAdminController } from './useCases/CreateAdmin'
import { createClassController } from './useCases/CreateClass'
import { createModuleController } from './useCases/CreateModule'
import { getAllModulesController } from './useCases/GetAllModules'
import { getClassesByModulesController } from './useCases/GetClassesByModule'
import { loginController } from './useCases/Login'
import { editModuleController } from './useCases/EditModule'
import { deleteModuleController } from './useCases/DeleteModule'
import { editClassController } from './useCases/EditClass'
import { deleteClassController } from './useCases/DeleteClass'

import { isAdmin } from './middlewares/isAdmin'

const router = Router()

router.post('/signup', isAdmin, (req, res) => createAdminController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

router.get('/modules', (req, res) => getAllModulesController.handle(req, res))
router.post('/modules',  isAdmin, (req, res) => createModuleController.handle(req, res))
router.put('/modules', isAdmin, (req, res) => editModuleController.handle(req, res))
router.delete('/modules/:id', isAdmin, (req, res) => deleteModuleController.handle(req, res))

router.get('/classes/:module_id', (req, res) => getClassesByModulesController.handle(req, res))
router.post('/classes', isAdmin, (req, res) => createClassController.handle(req, res))
router.put('/classes', isAdmin, (req, res) => editClassController.handle(req, res))
router.delete('/classes/:id', isAdmin, (req, res) => deleteClassController.handle(req, res))

export { router }