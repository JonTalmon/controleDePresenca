import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js"

const Persons = sequelize.define('Persons', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true,
    }
});

export default Persons;