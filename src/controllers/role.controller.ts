import { Request, Response } from "express";
import { Role } from "../entity/Role";

interface RoleBody {
    description: string;
    active: boolean;
}

export const getRoles = async (req: Request, res: Response) => {
  try {
    const result = await Role.find();
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Role.findOneBy({ id: parseInt(id) });

    if (!result) return res.status(404).json({ message: "Role not found" });

    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createRole = async (
  req: Request<unknown, unknown, RoleBody>,
  res: Response
) => {
  const { description, active } = req.body;
  const result = new Role();
  result.description = description;
  result.active = active;
  await result.save();
  return res.json(result);
};

export const updateRole = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Role.findOneBy({ id: parseInt(id) });
    if (!result) return res.status(404).json({ message: "Not Role found" });

    await Role.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Role.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Role not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};