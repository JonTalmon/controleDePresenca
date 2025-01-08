import Year from "./year.js";
import Month from "./month.js";
import Day from "./day.js";
import Class from "./class.js";
import Person from "./person.js";
import Attendance from "./attendance.js";

const defineAssociations = () => {

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
};

export default defineAssociations;