
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class Estudiante extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({nullable:true})
    idUsuario: string;
  
    @Column({nullable:true})
    nombreEstudiante: string;
  
    @Column({nullable:true})
    apellidoEstudiante: string;
  
    @Column({nullable:true})
    actaNacimiento: string;

    @Column({nullable:true})
    curso: string;
  
    @Column({nullable:true})
    sexo: string;
  
    @Column({nullable:true})
    fecha_n: string;

    @Column({nullable:true})
    vacunas: string;
  
    @Column({nullable:true})
    discapacidad: string;
  
    @Column({nullable:true})
    tipo_sangre: string;

    @Column({nullable:true})
    seguro_medico: string;
  
    @Column({nullable:true})
    alergias: string;
  
    @Column({nullable:true})
    tipo_de_estudiante: string;

    @Column({nullable:true})
    foto: string;
  
    @Column({nullable:true})
    cedula: string;
  
    @Column({nullable:true})
    nombrePadre: string;

    @Column({nullable:true})
    apellidoPadre: string;
  
    @Column({nullable:true})
    telefono: string;
  
    @Column({nullable:true})
    direccion: string;

    @Column({nullable:true})
    trabajo: string;
  
    @Column({nullable:true})
    tipo_trabajo: string;
  
    @Column({nullable:true})
    correo: string;

    @Column({nullable:true})
    nacionalidad: string;
  
    @Column({nullable:true})
    documento_personal: string;
  
    @Column({nullable:true})
    otro: string;

    @Column({nullable:true})
    cedula2: string;
  
    @Column({nullable:true})
    nombrePadre2: string;
  
    @Column({nullable:true})
    apellidoPadre2: string;

    @Column({nullable:true})
    telefono2: string;
  
    @Column({nullable:true})
    direccion2: string;
  
    @Column({nullable:true})
    documento_personal2: string;

    @Column({nullable:true})
    estado_acta: string;
  
    @Column({nullable:true})
    numero_de_acta: string;
  
    @Column({nullable:true})
    provincias_JCE: string;

    @Column({nullable:true})
    municipio_JCE: string;
  
    @Column({nullable:true})
    oficialias_JCE: string;
  
    @Column({nullable:true})
    libro: number;

    @Column({nullable:true})
    folio: number;
  
    @Column({nullable:true})
    year: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }

