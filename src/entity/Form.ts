import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class Form extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idUsuario: number;
  
    @Column()
    nombreEstudiante: string;
  
    @Column()
    apellidoEstudiante: string;

    @Column()
    actaNacimiento: string;

    @Column()
    direccion: string;

    @Column()
    nombrePadre: string;

    @Column()
    apellidoPadre: string;


    @Column()
    telefono: string;


    @Column()
    cedula: string;


    @Column( {default: true})
    confirmacion: boolean;
  

    @Column( {default: true})
    pago: boolean;


    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }

