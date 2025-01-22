import Persons from "../../models/persons";

async function deletePersonById(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Persons.destroy({ where: { id } });

        if(deleted) {
            res.status(200).json({ mesage: "Person deleted succesfully"});
        } else {
            res.status(404).json({ Error: "Person not found"});
        }
    } catch (err) {
        res.status(500).json({ Error: "Error deleting person", details: err.message});
    }
};

export { deletePersonById };