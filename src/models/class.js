import { DataTypes } from "sequelize";
import Sequelize from "../db/connection.js"

const Class = Sequelize.define("Class", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
});

export default Class;