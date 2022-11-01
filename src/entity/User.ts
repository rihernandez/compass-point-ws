import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({nullable:true})
    cedula: string;

    @Column()
    nombre: string;
  
    @Column()
    apellido: string;

    @Column()
    gmail: string;
  
    @Column()
    contrasena: string;

    @Column()
    admin: string;

    @Column({ default: true })
    active: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }