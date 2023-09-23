import express from "express";
import { addProdutoController, getAllProdutoController, listarSaboresDeBiscoitos } from "../controllers/bauduccoController";

const router = express.Router();

router.get('/', getAllProdutoController);
router.post('/', addProdutoController);
router.get('/', listarSaboresDeBiscoitos);

export default router;

