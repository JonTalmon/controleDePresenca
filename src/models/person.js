import { DataTypes } from "sequelize";
import Sequelize from "../db/connection.js"

const Person = Sequelize.define('Person', {
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
    },
});

export default Person;