import { Router } from "express";
const router = Router()
//Importamos el controlador
import mocksController from "../controllers/mocks.controller.js";

//Endpoint para obtener mascotas simuladas
router.get("/mockingpets", mocksController.getMockingPets)
//Endpoint para obtener usuarios simulados
router.get("/mockingusers", mocksController.getMockingUsers)
//Endpoint para generar e insertar usuarios y mascotas
router.post("/generateData")

export default router