import { Router } from 'express'
import { createClassController } from './useCases/CreateClass'
import { createModuleController } from './useCases/CreateModule'
import { getAllModulesController } from './useCases/GetAllModules'
import { getClassesByModulesController } from './useCases/GetClassesByModule'

const router = Router()

router.get('/modules', (req, res) => getAllModulesController.handle(req, res))
router.post('/modules', (req, res) => createModuleController.handle(req, res))

router.get('/classes/:module_id', (req, res) => getClassesByModulesController.handle(req, res))
router.post('/classes', (req, res) => createClassController.handle(req, res))

export { router }