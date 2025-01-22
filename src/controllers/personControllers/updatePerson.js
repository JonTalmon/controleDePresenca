import Persons from "../../models/persons";
import ClassGroup from "../../models/classGroup"

async function updatePersonById(req, res) {
    try {
        const { id } = req.params;
        const { name, birthday, classGroup } = req.body;
        const person = await Persons.findByPk(id);

        if(!person) {
            return res.status(404).json({ Error: "Person not found" });
        }

        await person.update({ name, birthday });

        if(classGroup) {
            const group = await ClassGroup.findOne({ where: {classname: classGroup} });

            if (group) {
                await person.setClassGroup(group)
            } else {
                await person.createClassGroup(classGroup);
            }

            res.status(200).json({ message: "Person updated succesfully "})
        }
    } catch (err) {
        res.status(500).json({ Error: "Error updating person", details: err.message });
    }
};

export { updatePersonById };