import { Router } from 'express'
import multer from 'multer'

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
import { getAllClassesController } from './useCases/GetAllClasses'
import { getAllAdminsController } from './useCases/GetAllAdmins'
import { deleteAdminController } from './useCases/DeleteAdmin'

import { isAdmin } from './middlewares/isAdmin'

const router = Router()
const upload = multer()

router.post('/signup', isAdmin, (req, res) => createAdminController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

router.get('/modules', (req, res) => getAllModulesController.handle(req, res))
router.post('/modules',  isAdmin, (req, res) => createModuleController.handle(req, res))
router.put('/modules', isAdmin, (req, res) => editModuleController.handle(req, res))
router.delete('/modules/:id', isAdmin, (req, res) => deleteModuleController.handle(req, res))

router.get('/classes/', (req, res) => getAllClassesController.handle(req, res))
router.get('/classes-by-modules/:module_id', (req, res) => getClassesByModulesController.handle(req, res))
router.post('/classes', upload.single('image'), isAdmin, (req, res) => createClassController.handle(req, res))
router.put('/classes', upload.single('image'), isAdmin, (req, res) => editClassController.handle(req, res))
router.delete('/classes', isAdmin, (req, res) => deleteClassController.handle(req, res))

router.get('/admins', isAdmin, (req, res) => getAllAdminsController.handle(req, res))
router.delete('/admins', isAdmin, (req, res) => deleteAdminController.handle(req, res))

export { router }