import { DataTypes } from "sequelize";
import Sequelize from "../db/connection.js"

const Year = Sequelize.define("Year", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
});

export default Year;