import { Router } from "express";
import {
  getEstudiantes,
  getEstudiante,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante,
} from "../controllers/estudiante.controller";

const router = Router();

router.get("/estudiantes", getEstudiantes);

router.get("/estudiantes/:id", getEstudiante);

router.post("/estudiantes", createEstudiante);

router.put("/estudiantes/:id", updateEstudiante);

router.delete("/estudiantes/:id", deleteEstudiante);

export default router;