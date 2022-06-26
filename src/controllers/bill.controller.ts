import { Request, Response } from "express";
import { Bill } from "../entity/Bill";
import { Student } from "../entity/Student";
import { Charge } from "../entity/Charge";

interface BillBody {
    id_student: Student; 
    id_charge: Charge; 
    active: boolean;
}

export const getBills = async (req: Request, res: Response) => {
  try {
    const result = await Bill.find();
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getBill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Bill.findOneBy({ id: parseInt(id) });

    if (!result) return res.status(404).json({ message: "Bill not found" });

    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createBill = async (
  req: Request<unknown, unknown, BillBody>,
  res: Response
) => {
  const { id_student, id_charge, active } = req.body;
  const result = new Bill();
  result.id_student = id_student;
  result.id_charge = id_charge;
  result.active = active;
  await result.save();
  return res.json(result);
};

export const updateBill = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Bill.findOneBy({ id: parseInt(id) });
    if (!result) return res.status(404).json({ message: "Not bill found" });

    await Bill.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteBill = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Bill.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Bill not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};