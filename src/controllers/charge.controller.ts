import { Request, Response } from "express";
import { Charge } from "../entity/Charge";
import { Student } from "../entity/Student";

interface ChargeBody {
    description: string;
    id_student: Student; 
    amount: number;
    active: boolean;

}

export const getCharges = async (req: Request, res: Response) => {
  try {
    const result = await Charge.find();
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getCharge = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Charge.findOneBy({ id: parseInt(id) });

    if (!result) return res.status(404).json({ message: "Charge not found" });

    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createCharge = async (
  req: Request<unknown, unknown, ChargeBody>,
  res: Response
) => {
  const { description, id_student, amount, active } = req.body;
  const result = new Charge();
  result.description = description;
  result.id_student = id_student;
  result.amount = amount;
  result.active = active;
  await result.save();
  return res.json(result);
};

export const updateCharge = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Charge.findOneBy({ id: parseInt(id) });
    if (!result) return res.status(404).json({ message: "Not Charge found" });

    await Charge.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteCharge = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Charge.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Charge not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};