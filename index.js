import dotenv from 'dotenv'
import express from 'express';
const app = express();
import sequelize from './src/db/connection.js';
const port = process.env.PORT || 3000;
import {getAllPersons} from './src/controllers/personControllers/personController.js'


dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/person", getAllPersons)

sequelize.sync().then(() => {
    console.log("Connected to the database");
    app.listen(port, () =>{
        console.log(`Server is running on port: ${port}`);
    });
}).catch((Error) => {
    console.log("Error connecting to the database", Error);
});