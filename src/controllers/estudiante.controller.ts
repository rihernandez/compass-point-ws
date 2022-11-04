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
    tanda: string
    confirmacion: string;
    pago:string;
    acta: string;
    vacuna: string;
    foto2x2: string;
    documento: string;
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
        curso,
        sexo,
        fecha_n,
        discapacidad,
        tipo_sangre,
        alergias,
        tipo_de_estudiante,
        cedula,
        nombrePadre,
        apellidoPadre,
        telefono,
        direccion,
        trabajo,
        tipo_trabajo,
        correo,
        nacionalidad,
        otro,
        cedula2,
        nombrePadre2,
        apellidoPadre2,
        telefono2,
        direccion2,
        estado_acta,
        numero_de_acta,
        provincias_JCE,
        municipio_JCE,
        oficialias_JCE,
        libro,
        folio,
        year,
        tanda,
        confirmacion,
        pago,
        acta,
        vacuna,
        foto2x2,
        documento,
        documento_personal2,
        seguro_medico,
    } = req.body
    const result = new Estudiante();
    result.idUsuario = idUsuario;
    result.nombreEstudiante = nombreEstudiante;
    result.apellidoEstudiante = apellidoEstudiante;
    result.curso = curso;
    result.sexo = sexo;
    result.fecha_n = fecha_n;
    result.discapacidad = discapacidad;
    result.tipo_sangre = tipo_sangre;
    result.alergias = alergias;
    result.tipo_de_estudiante = tipo_de_estudiante;
    result.cedula = cedula;
    result.nombrePadre = nombrePadre;
    result.apellidoPadre = apellidoPadre;
    result.telefono = telefono;
    result.direccion = direccion;
    result.trabajo = trabajo;
    result.tipo_trabajo = tipo_trabajo;
    result.correo = correo;
    result.nacionalidad = nacionalidad;
    result.otro = otro;
    result.cedula2 = cedula2;
    result.nombrePadre2 = nombrePadre2;
    result.apellidoPadre2 = apellidoPadre2;
    result.telefono2 = telefono2;
    result.direccion2 = direccion2;
    result.estado_acta = estado_acta;
    result.numero_de_acta = numero_de_acta;
    result.provincias_JCE = provincias_JCE;
    result.municipio_JCE = municipio_JCE;
    result.oficialias_JCE = oficialias_JCE;
    result.libro = libro;
    result.folio = folio;
    result.year = year;
    result.tanda = tanda;
    result.confirmacion = confirmacion,
    result.pago = pago;
    result.acta = acta;
    result.vacuna = vacuna;
    result.foto2x2 = foto2x2;
    result.documento = documento;
    result.documento_personal2 = documento_personal2;
    result.seguro_medico = seguro_medico;
    await result.save();
    return result.id;
};




export const updateEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
        idUsuario,
        nombreEstudiante,
        apellidoEstudiante,
        curso,
        sexo,
        fecha_n,
        discapacidad,
        tipo_sangre,
        alergias,
        tipo_de_estudiante,
        cedula,
        nombrePadre,
        apellidoPadre,
        telefono,
        direccion,
        trabajo,
        tipo_trabajo,
        correo,
        nacionalidad,
        otro,
        cedula2,
        nombrePadre2,
        apellidoPadre2,
        telefono2,
        direccion2,
        estado_acta,
        numero_de_acta,
        provincias_JCE,
        municipio_JCE,
        oficialias_JCE,
        libro,
        folio,
        year,
        tanda,
        confirmacion,
        pago,
        acta,
        vacuna,
        foto2x2,
        documento,
        seguro_medico,
        documento_personal2
    } = req.body
    try {
        
        const result = await Estudiante.findOneBy({ id: parseInt(id) });
        if (!result) return res.status(404).json({ message: "Not Estudiante found" });

        const resUpdate = new Estudiante();
        resUpdate.idUsuario = idUsuario;
        resUpdate.nombreEstudiante = nombreEstudiante;
        resUpdate.apellidoEstudiante = apellidoEstudiante;
        resUpdate.curso = curso;
        resUpdate.sexo = sexo;
        resUpdate.fecha_n = fecha_n;
        resUpdate.discapacidad = discapacidad;
        resUpdate.tipo_sangre = tipo_sangre;
        resUpdate.alergias = alergias;
        resUpdate.tipo_de_estudiante = tipo_de_estudiante;
        resUpdate.cedula = cedula;
        resUpdate.nombrePadre = nombrePadre;
        resUpdate.apellidoPadre = apellidoPadre;
        resUpdate.telefono = telefono;
        resUpdate.direccion = direccion;
        resUpdate.trabajo = trabajo;
        resUpdate.tipo_trabajo = tipo_trabajo;
        resUpdate.correo = correo;
        resUpdate.nacionalidad = nacionalidad;
        resUpdate.otro = otro;
        resUpdate.cedula2 = cedula2;
        resUpdate.nombrePadre2 = nombrePadre2;
        resUpdate.apellidoPadre2 = apellidoPadre2;
        resUpdate.telefono2 = telefono2;
        resUpdate.direccion2 = direccion2;
        resUpdate.estado_acta = estado_acta;
        resUpdate.numero_de_acta = numero_de_acta;
        resUpdate.provincias_JCE = provincias_JCE;
        resUpdate.municipio_JCE = municipio_JCE;
        resUpdate.oficialias_JCE = oficialias_JCE;
        resUpdate.tanda = tanda;
        resUpdate.confirmacion = confirmacion;
        resUpdate.pago = pago
        resUpdate.acta = acta;
        resUpdate.vacuna = vacuna;
        resUpdate.foto2x2 = foto2x2;
        resUpdate.documento = documento
        resUpdate.documento_personal2 = documento_personal2;
        resUpdate.seguro_medico = seguro_medico;

        await Estudiante.update({ id: parseInt(id) }, resUpdate);

        return res.sendStatus(200);
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