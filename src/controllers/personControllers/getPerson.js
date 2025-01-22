import Persons from "../../models/persons";
import ClassGroup from "../../models/classGroup"

async function getAllPersons(req, res) {
    try {
        const person = await Persons.findAll({
            include: [{
                model: ClassGroup,
                attributes: ['classname']
            }]
        });
        res.status(200).json(person)
    } catch (err) {
        res.status(500).json({Error: "Error retrieving persons", details: err.message});
    };
};

async function getPersonById(req, res) {
    try {
        const { id } = req.params;
        const person = await Persons.findByPk(id, {
            include: [{
                model: ClassGroup,
                attributes: ['classname']
            }]
        });
        if (person) {
            res.status(200).json(person);
            console.log("Person found!");
        } else {
            res.status(404).json({Error: "Person not found"});
        };
    } catch (err) {
        res.status(500).json({Error: "Error retrieving persons", details: err.message})
    };
};

async function getPersonByName(req, res) {
    try {
        const { name } = req.params;
        const person = Persons.findOne({
            where: { name },
            include: [{
                model: ClassGroup,
                attributes: ['classname']
            }]
        });
        if (person) {
            res.status(200).json(person);
            console.log("Person found!");
        } else {
            res.status(404).json({Error: "Person not found"});
        };
    } catch (err) {
        res.status(500).json({Error: "Error retrieving persons", details: err.message});
    };
};

async function getAllPersonsByClassName(req, res) {
    try {
        const { classname } = req.params;
        const classInstance = await ClassGroup.findOne({
            where: { classname },
            include: [{
                model: Persons
            }]
        });
        if (classInstance) {
            const person = classInstance.Persons;
            res.status(200).json(person);
            console.log("Person found")
        } else {
            res.status(404).json({Error: "Class not found"});
        };
    } catch (err) {
        res.status(500).json({ Error: "Error retrieving persons by class name", details: err.message });
    };
};

export { getAllPersons, getPersonById, getPersonByName, getAllPersonsByClassName };