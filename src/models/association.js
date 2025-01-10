import Year from "./year";
import Month from "./month";
import Day from "./day";
import Class from "./class";
import Persons from "./persons";
import Attendance from "./attendance";

Year.hasMany(Month, { foreignKey: 'yearId' });
Month.belongsTo(Year, { foreignKey: 'yearId' });

Month.hasMany(Day, { foreignKey: 'monthId' });
Day.belongsTo(Month, { foreignKey: 'monthId' });

Class.hasMany(Attendance, { foreignKey: 'classId' });
Attendance.belongsTo(Class, { foreignKey: 'classId' });

Person.hasMany(Attendance, { foreignKey: 'personsId' });
Attendance.belongsTo(Persons, { foreignKey: 'personsId' });

Day.hasMany(Attendance, { foreignKey: 'dayId' });
Attendance.belongsTo(Day, { foreignKey: 'dayId' });

Year.hasMany(Attendance, { foreignKey: 'yearId' });
Attendance.belongsTo(Year, { foreignKey: 'yearId' });

Month.hasMany(Attendance, { foreignKey: 'monthId' });
Attendance.belongsTo(Month, { foreignKey: 'monthId' });

export default function applyAssociations() {
    sequelize.models.Year = Year;
    sequelize.models.Month = Month;
    sequelize.models.Day = Day;
    sequelize.models.Class = Class;
    sequelize.models.Persons = Persons;
    sequelize.models.Attendance = Attendance;
}