import Persons from "../../models/persons";
import ClassGroup from "../../models/classGroup"

async function createPerson(req, res) {
    try {
        const { name, birthday, classGroup } = req.body;
        const newPerson = await Persons.create({ name, birthday, classGroup });
        if (ClassGroup) {
            await ClassGroup.create({
                ...classGroup,
                personId: newPerson.id,
            });
        }
        res.status(201).json({ message: "New person created succesfully", newPerson })
    } catch (err) {
        res.status(500).json({ Error: "Error creating new person", details: err.message })
    }
};

export { createPerson };