import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js"

const Attendance = sequelize.define('Attendance', {
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