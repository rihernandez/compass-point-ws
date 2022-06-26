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
  
  @Entity()
  export class Charge extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    description: string;
  
    @ManyToOne(type => Student, student => student.id)
    @JoinColumn({ name: "studentId" })
    id_student: Student; 
    
    @Column()
    amount: number;

    @Column({ default: true })
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }


