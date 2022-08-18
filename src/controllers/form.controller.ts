import { Request, Response } from "express";
import { Form } from "../entity/Form";

interface FormBody {
    idUsuario:number;
    nombreEstudiante: string;
    apellidoEstudiante: string;
    actaNacimiento: string;
    direccion: string;
    nombrePadre: string;
    apellidoPadre: string;
    telefono: string;
    cedula: string;
    confirmacion: boolean;
    pago:boolean;
    documento_personal: string;
    curso: string;

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
  req: Request,
  res: Response
) => {

  const {  
    idUsuario,
    nombreEstudiante,
    apellidoEstudiante,
    actaNacimiento,
    direccion,
    nombrePadre,
    apellidoPadre,
    telefono,
    cedula,
    confirmacion,
    pago,
    curso,
    documento_personal

  } = req.body;
  const result = new Form();
  result.idUsuario=idUsuario;
  result.nombreEstudiante = nombreEstudiante;
  result.apellidoEstudiante = apellidoEstudiante;
  result.actaNacimiento = actaNacimiento;
  result.direccion = direccion;
  result.nombrePadre = nombrePadre;
  result.apellidoPadre = apellidoPadre;
  result.telefono = telefono;
  result.cedula = cedula;
  result.confirmacion = confirmacion;
  result.pago = pago;
  result.curso = curso;
  result.documento_personal = documento_personal;
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