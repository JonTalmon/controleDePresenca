import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js"

const Class = sequelize.define("Class", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    classname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
});

export default Class;