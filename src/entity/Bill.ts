import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from "typeorm";
import { Student } from "./Student";
import { Charge } from "./Charge";

  @Entity()
  export class Bill extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(type => Student, student => student.id)
    @JoinColumn({ name: "studentId" })
    id_student: Student; 

    @ManyToOne(type => Charge, charge => charge.id)
    @JoinColumn({ name: "chargeId" })
    id_charge: Charge; 

    @Column({ default: true })
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }