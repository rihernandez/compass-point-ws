import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Bill } from "./entity/Bill";
import { Charge } from "./entity/Charge";
import { Family } from "./entity/Family";
import { Role } from "./entity/Role";
import { Student } from "./entity/Student";
import { Form } from "./entity/Form";
import { Estudiante } from "./entity/Estudiantes";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "castor.db.elephantsql.com",
  port: 5432,
  username: "oxmmbsff",
  password: "FT4KcVlw6HfptV7lStIBKP21Sj59k_zf",
  database: "oxmmbsff",
  synchronize: true,
  // logging: true,
  entities: [User, Role, Family, Charge, Bill, Student, Form, Estudiante],
});