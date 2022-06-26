import { Router } from "express";
import {
  getCharges,
  getCharge,
  createCharge,
  updateCharge,
  deleteCharge,
} from "../controllers/charge.controller";

const router = Router();

router.get("/charges", getCharges);

router.get("/charges/:id", getCharge);

router.post("/charges", createCharge);

router.put("/charges/:id", updateCharge);

router.delete("/charges/:id", deleteCharge);

export default router;