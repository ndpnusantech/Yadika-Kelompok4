import { Sequelize } from "sequelize";

const database = new Sequelize("store_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default database;
