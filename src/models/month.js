import { DataTypes } from "sequelize";
import Sequelize from "../db/connection.js"

const Month = Sequelize.define("Month", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    monthName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            isIn: [["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]]
        },
    },
});

export default Month