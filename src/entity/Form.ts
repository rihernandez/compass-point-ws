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
    student_name: string;
  
    @Column()
    student_last_name: string;

    @Column()
    acta: string;

    @Column()
    address: string;

    @Column()
    father_name: string;

    @Column()
    father_last_name: string;


    @Column()
    phone: string;


    @Column()
    cedula: string;


    @Column( {default: true})
    confirmation: boolean;
  

    @Column( {default: true})
    payment: boolean;


    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }