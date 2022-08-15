import { Request, Response } from "express";
import { sendEmail } from "../config/mta";
import { User } from "../entity/User";

interface UserBody {
  nombre: string;
  apellido: string;
  gmail: string;
  contrasena: string;
  admin: string;
  password: string;
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(id) });

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createUser = async (
  req: Request<unknown, unknown, UserBody>,
  res: Response
) => {
  const { 
    nombre,
    apellido,
    gmail,
    contrasena,
    admin
  } = req.body;
  const user = new User();
  user.nombre=nombre;
  user.apellido= apellido;
  user.gmail= gmail;
  user.contrasena = contrasena;
  user.admin = admin;
  await user.save();

  const payload = {
    from: '"CompassPoint" <rhc921004@gmail.com>',
    to:gmail,
    subject:'Registro de usuario ✔', 
    text:'BIENVENIDO! '+nombre+''+apellido,
    html: '<b>BIENVENIDO!</b> '+nombre+''+apellido +' <p>Gracias por registrarse en nuestra plataforma, su nuevo usuario es: <i>'+gmail+'</i> Y su contraseña: <b>'+contrasena+'</b>. <p>Recomendamos cambiar sus credenciales de acceso en cualquier momento para evitar uso mal intencionado de terceros que puedan acerse con las mismas.</p> \n Attentamente el <b>Equipo de CompassPoint</b>'
  }
 try{
  sendEmail(payload);
 }catch(e){
  console.log("there is an error trying to send an email");
 }
  return res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) return res.status(404).json({ message: "Not user found" });

    await User.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};