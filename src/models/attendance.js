import { DataTypes } from "sequelize";
import Sequelize from "../db/connection.js"

const Attendance = Sequelize.define('Attendance', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isPresent: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

export default Attendance;