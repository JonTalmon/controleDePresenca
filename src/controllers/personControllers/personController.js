import Person from '../../models/person.js'

export async function getAllPersons(req, res) {
    try {
        const person = await Person.findAll();
        res.status(200).json(person)
} catch(err) {
    res.status.json({ Error: "Error retriving persons", details: err.message});
};
};

