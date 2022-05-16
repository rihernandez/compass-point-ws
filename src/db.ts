import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "castor.db.elephantsql.com",
  port: 5432,
  username: "oxmmbsff",
  password: "FT4KcVlw6HfptV7lStIBKP21Sj59k_zf",
  database: "oxmmbsff",
  synchronize: true,
  // logging: true,
  entities: [User],
});