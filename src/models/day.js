import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js"

const Day = sequelize.define("Day", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    sundayNumber: {
        type: DataTypes.STRING(2),
        allowNull: false,
        validate: {
            isIn: [["1°, 2°, 3°, 4°, 5°"]]
        },
    },
});

export default Day;