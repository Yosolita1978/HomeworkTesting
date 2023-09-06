const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());    

app.get('/', (req, res) => {
  res.json({ message: 'Hola!, Techtonica!' });
});

app.get('/students', (req, res) => {
    const students = [{name: 'Sara', email: "fake@email.com"}, {name: 'Jen', email: "test@gmail.com"}, {name: 'Maria', email: "fake2@gmail.com"}];
    res.json(students);
});

//Allow me to export the object app
module.exports = app;





