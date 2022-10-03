import { Request, Response } from "express";
import { Estudiante } from "../entity/Estudiantes";

interface EstudianteBody {
    idUsuario: string;
    nombreEstudiante: string;
    apellidoEstudiante: string;
    actaNacimiento: string;
    curso: string;
    sexo: string;
    fecha_n: string;
    vacunas: string;
    discapacidad: string;
    tipo_sangre: string;
    seguro_medico: string;
    alergias: string;
    tipo_de_estudiante: string;
    foto: string;
    cedula: string;
    nombrePadre: string;
    apellidoPadre: string;
    telefono: string;
    direccion: string;
    trabajo: string;
    tipo_trabajo: string;
    correo: string;
    nacionalidad: string;
    documento_personal: string;
    otro: string;
    cedula2: string;
    nombrePadre2: string;
    apellidoPadre2: string;
    telefono2: string;
    direccion2: string;
    documento_personal2: string;
    estado_acta: string;
    numero_de_acta: string;
    provincias_JCE: string;
    municipio_JCE: string;
    oficialias_JCE: string;
    libro: number;
    folio: number;
    year: number;
}

export const getEstudiantes = async (req: Request, res: Response) => {
    try {
        const result = await Estudiante.find();
        return res.json(result);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getEstudiante = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Estudiante.findOneBy({ id: parseInt(id) });

        if (!result) return res.status(404).json({ message: "Estudiante not found" });

        return res.json(result);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createEstudiante = async (
    req: Request<unknown, unknown, EstudianteBody>,
    res: Response
) => {
    const {
        idUsuario,
        nombreEstudiante,
        apellidoEstudiante,
        actaNacimiento,
        curso,
        sexo,
        fecha_n,
        vacunas,
        discapacidad,
        tipo_sangre,
        seguro_medico,
        alergias,
        tipo_de_estudiante,
        foto,
        cedula,
        nombrePadre,
        apellidoPadre,
        telefono,
        direccion,
        trabajo,
        tipo_trabajo,
        correo,
        nacionalidad,
        documento_personal,
        otro,
        cedula2,
        nombrePadre2,
        apellidoPadre2,
        telefono2,
        direccion2,
        documento_personal2,
        estado_acta,
        numero_de_acta,
        provincias_JCE,
        municipio_JCE,
        oficialias_JCE,
        libro,
        folio,
        year,
    } = req.body
    const result = new Estudiante();
    result.idUsuario = idUsuario;
    result.nombreEstudiante = nombreEstudiante;
    result.apellidoEstudiante = apellidoEstudiante;
    result.actaNacimiento = actaNacimiento;
    result.curso = curso;
    result.sexo = sexo;
    result.fecha_n = fecha_n;
    result.vacunas = vacunas;
    result.discapacidad = discapacidad;
    result.tipo_sangre = tipo_sangre;
    result.seguro_medico = seguro_medico;
    result.alergias = alergias;
    result.tipo_de_estudiante = tipo_de_estudiante;
    result.foto = foto;
    result.cedula = cedula;
    result.nombrePadre = nombrePadre;
    result.apellidoPadre = apellidoPadre;
    result.telefono = telefono;
    result.direccion = direccion;
    result.trabajo = trabajo;
    result.tipo_trabajo = tipo_trabajo;
    result.correo = correo;
    result.nacionalidad = nacionalidad;
    result.documento_personal = documento_personal;
    result.otro = otro;
    result.cedula2 = cedula2;
    result.nombrePadre2 = nombrePadre2;
    result.apellidoPadre2 = apellidoPadre2;
    result.telefono2 = telefono2;
    result.direccion2 = direccion2;
    result.documento_personal2 = documento_personal2;
    result.estado_acta = estado_acta;
    result.numero_de_acta = numero_de_acta;
    result.provincias_JCE = provincias_JCE;
    result.municipio_JCE = municipio_JCE;
    result.oficialias_JCE = oficialias_JCE;
    result.libro = libro;
    result.folio = folio;
    result.year = year;
    await result.save();
    return res.json(result);
};




export const updateEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await Estudiante.findOneBy({ id: parseInt(id) });
        if (!result) return res.status(404).json({ message: "Not Estudiante found" });

        await Estudiante.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await Estudiante.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "Estudiante not found" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};