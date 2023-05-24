import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = database.define('products', {
    product_name: DataTypes.STRING,
    product_type: DataTypes.STRING,
    product_size: DataTypes.STRING,
    product_stock: DataTypes.INTEGER,
    product_price: DataTypes.DECIMAL,
}, {
    freezeTableName:true
})

export default Product;

(async() => {
    await database.sync();
})();

