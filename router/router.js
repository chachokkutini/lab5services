import { Router } from "express"
const router = new Router

import { getAllBanks, getAllCurrencies, getAllClients, createExchange } from "../controllers/controller.js"

router.get("/banks", getAllBanks) 
router.get("/clients", getAllClients) 
router.get("/currencies", getAllCurrencies) 

router.post("/assignment", createExchange) 

export default router