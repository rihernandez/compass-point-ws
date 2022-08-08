import { Request, Response } from "express";
import { Form } from "../entity/Form";

interface FormBody {
    student_name : string;
    student_last_name: string;
    acta: string;
    address: string;
    father_name: string;
    father_last_name: string;
    phone: string;
    cedula: string;
    confirmation: boolean;
    payment: boolean;
}

export const getForms = async (req: Request, res: Response) => {
  try {
    const result = await Form.find();
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getForm = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Form.findOneBy({ id: parseInt(id) });

    if (!result) return res.status(404).json({ message: "Form not found" });

    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createForm = async (
  req: Request<unknown, unknown, FormBody>,
  res: Response
) => {

  const {  
    student_name,
    student_last_name,
    acta,
    address,
    father_name,
    father_last_name,
    phone,
    cedula,
    confirmation,
    payment
  } = req.body;
  const result = new Form();
  result.student_name= student_name;
  result.student_last_name= student_last_name;
  result.acta = acta;
  result.address = address;
  result.father_name = father_name;
  result.father_last_name = father_last_name;
  result.phone = phone;
  result.cedula = cedula;
  result.confirmation = confirmation;
  result.payment = payment
  await result.save();
  return res.json(result);
};

export const updateForm = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await Form.findOneBy({ id: parseInt(id) });
    if (!result) return res.status(404).json({ message: "Not Form found" });

    await Form.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteForm = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Form.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Form not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};