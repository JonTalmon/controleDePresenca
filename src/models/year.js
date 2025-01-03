import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const Year = sequelize.define("Year", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    }
});

export default Year;