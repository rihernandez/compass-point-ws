import { Router } from "express";
import {
  getBills,
  getBill,
  createBill,
  updateBill,
  deleteBill,
} from "../controllers/bill.controller";

const router = Router();

router.get("/bills", getBills);

router.get("/bills/:id", getBill);

router.post("/bills", createBill);

router.put("/bills/:id", updateBill);

router.delete("/bills/:id", deleteBill);

export default router;