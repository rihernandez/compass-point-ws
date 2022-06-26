import { Router } from "express";
import {
  getFamilys,
  getFamily,
  createFamily,
  updateFamily,
  deleteFamily,
} from "../controllers/family.controller";

const router = Router();

router.get("/families", getFamilys);

router.get("/families/:id", getFamily);

router.post("/families", createFamily);

router.put("/families/:id", updateFamily);

router.delete("/families/:id", deleteFamily);

export default router;