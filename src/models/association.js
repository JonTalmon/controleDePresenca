import Year from "./year";
import Month from "./month";
import Day from "./day";
import ClassGroup from "./classGroup";
import Persons from "./persons";
import Attendance from "./attendance";

Year.hasMany(Month, { foreignKey: 'yearId' });
Month.belongsTo(Year, { foreignKey: 'yearId' });

Month.hasMany(Day, { foreignKey: 'monthId' });
Day.belongsTo(Month, { foreignKey: 'monthId' });

ClassGroup.hasMany(Attendance, { foreignKey: 'classGroupId' });
Attendance.belongsTo(Class, { foreignKey: 'classGroupId' });

Persons.hasMany(Attendance, { foreignKey: 'personId' });
Attendance.belongsTo(Persons, { foreignKey: 'personId' });

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
    sequelize.models.ClassGroup = ClassGroup;
    sequelize.models.Persons = Persons;
    sequelize.models.Attendance = Attendance;
};