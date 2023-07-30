import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = database.define("User", {
  user_name: DataTypes.STRING,
  user_email: DataTypes.STRING,
  user_password: DataTypes.STRING,
},
{
  freezeTableName: true,
});

export default User;

(async () => {
  await database.sync();
})();
