import { Router } from "express";
import {
  getForms,
  getForm,
  createForm,
  updateForm,
  deleteForm,
} from "../controllers/form.controller";

const router = Router();

router.get("/forms", getForms);

router.get("/forms/:id", getForm);

router.post("/forms", createForm);

router.put("/forms/:id", updateForm);

router.delete("/forms/:id", deleteForm);

export default router;