// UserModel.js
import { Sequelize } from "sequelize";
import database from "../config/Database.js";
import Product from "../models/ProductModel.js"

const { DataTypes } = Sequelize;

const Category = database.define("Category", {
  id_category: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_category: DataTypes.STRING,
});

// Asosiasi many-to-one antara Product dan Category
Product.belongsTo(Category, {
  foreignKey: "product_category", // Nama kolom pada Product yang mengacu pada kategori
  targetKey: "product_category", // Nama kolom pada Category yang menjadi target referensi
});

export default { Category };
