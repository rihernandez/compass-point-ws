import { Request, Response } from "express";
import { Student } from "../entity/Student";
import { Family } from "../entity/Family";

interface StudentBody {
    firstname: string;
    lastname: string;
    active: boolean;
    birthcert: boolean;
    id_family: Family; 
    address: string;
}

export const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await Student.find();
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Student.findOneBy({ id: parseInt(id) });

    if (!result) return res.status(404).json({ message: "Student not found" });

    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createStudent = async (
  req: Request<unknown, unknown, StudentBody>,
  res: Response
) => {
  const { firstname, lastname, active, birthcert, id_family, address } = req.body;
  const result = new Student();
  result.firstname=firstname;
  result.lastname=lastname;
  result.active=active;
  result.birthcert=birthcert;
  result.id_family=id_family;
  result.address=address;
  await result.save();
  return res.json(result);
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Student.findOneBy({ id: parseInt(id) });
    if (!result) return res.status(404).json({ message: "Not Student found" });

    await Student.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Student.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Student not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};