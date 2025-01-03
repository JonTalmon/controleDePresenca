import Year from "./year";
import Month from "./month";
import Day from "./day";
import Class from "./class";
import Person from "./person";
import Attendance from "./attendance";

Year.hasMany(Month, { foreignKey: 'yearId' });
Month.belongsTo(Year, { foreignKey: 'yearId' });

Month.hasMany(Day, { foreignKey: 'monthId' });
Day.belongsTo(Month, { foreignKey: 'monthId' });

Class.hasMany(Attendance, { foreignKey: 'classId' });
Attendance.belongsTo(Class, { foreignKey: 'classId' });

Person.hasMany(Attendance, { foreignKey: 'personId' });
Attendance.belongsTo(Person, { foreignKey: 'personId' });

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
    sequelize.models.Person = Person;
    sequelize.models.Attendance = Attendance;
}