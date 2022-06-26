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

  import {Family} from "./Family"
  
  @Entity()
  export class Student extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstname: string;
  
    @Column()
    lastname: string;
  
    @Column({ default: true })
    active: boolean;
  
    @Column({ default: true })
    birthcert: boolean;

    @ManyToOne(type => Family, family => family.id)
    @JoinColumn({ name: "relationshipId" })
    id_family: Family; 

    @Column()
    address: string;
    
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }

