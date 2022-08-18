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

    @Column({nullable:true})
    idUsuario: number;
  
    @Column({nullable:true})
    nombreEstudiante: string;
    @Column({nullable:true})
    apellidoEstudiante: string;

    @Column({nullable:true})
    actaNacimiento: string;

    @Column({nullable:true})
    direccion: string;

    @Column({nullable:true})
    nombrePadre: string;

    @Column({nullable:true})
    apellidoPadre: string;


    @Column({nullable:true})
    telefono: string;


    @Column({nullable:true})
    cedula: string;


    @Column( {default: true})
    confirmacion: boolean;
  

    @Column( {default: true})
    pago: boolean;


    @Column({nullable:true})
    documento_personal: string;


    @Column({nullable:true})
    curso: string;


    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }

