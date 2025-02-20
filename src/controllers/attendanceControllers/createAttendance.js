import Attendance from "../models/attendance.js";
import Persons from "../models/persons.js";
import Day from "../models/day.js";
import ClassGroup from "../models/classGroup.js";

async function createAttendance(req, res) {
    try {
        const { personId, dayId, classGroupId, isPresent } = req.body;
        
        if (!personId || !dayId || !classGroupId || isPresent === undefined) {
            return res.status(400).json({ error: "All fields are required"});
        };

        const person = await Persons.findByPk(personId);
        if (!person) return res.status(404).json({ error: "Person not found"});

        const day = await Day.findByPk(dayId);
        if (!day) return res.status(404).json({ error: "Day not found"});

        const group = await ClassGroup.findByPk(classGroupId);
        if (!group) return res.status(404).json({ error: "Class not found"});

        const attendance = await Attendance.create({
            personId,
            dayId,
            classGroupId,
            isPresent
        });

        res.status(201).json(attendance);

    } catch (err) {
        res.status(500).json({error: "Error creating attendance", details: err.message});
    }
};

export { createAttendance };