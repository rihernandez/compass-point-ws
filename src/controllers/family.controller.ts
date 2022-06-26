import { Request, Response } from "express";
import { Family } from "../entity/Family";

interface FamilyBody {
    firstname: string;
    lastname: string;
    active: boolean;
    relationship: string;
}

export const getFamilys = async (req: Request, res: Response) => {
  try {
    const result = await Family.find();
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getFamily = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Family.findOneBy({ id: parseInt(id) });

    if (!result) return res.status(404).json({ message: "Family not found" });

    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createFamily = async (
  req: Request<unknown, unknown, FamilyBody>,
  res: Response
) => {
  const { firstname, lastname, relationship, active } = req.body;
  const result = new Family();
  result.firstname = firstname;
  result.lastname = lastname;
  result.relationship = relationship;
  result.active = active;
  await result.save();
  return res.json(result);
};

export const updateFamily = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Family.findOneBy({ id: parseInt(id) });
    if (!result) return res.status(404).json({ message: "Not Family found" });

    await Family.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteFamily = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Family.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Family not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};