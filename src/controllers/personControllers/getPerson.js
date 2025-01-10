import Person from "../../models/person";
import Class from "../../models/class"

async function getAllPersons(req, res) {
    try {
        const person = await Person.findAll();
        res.status(200).json(person)
    } catch (err) {
        res.status(500).json({Error: "Error retrieving persons", details: err.message});
    };
};

async function getPersonById(req, res) {
    try {
        const id = req.params;
        const person = await Person.findByPk(id, 
            {include: [
                {model: Class,
                    attributes: [
                        'classname'
                    ]
                }
            ]}
        );
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
