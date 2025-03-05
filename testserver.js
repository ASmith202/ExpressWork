const express = require ('express');
const app = express();
const PORT = 3000;
const { LocalStorage } = require('node-localstorage');


const localStorage = new LocalStorage('./storage');
let fruits = JSON.parse(localStorage.getItem('fruits')) || [];

app.get('/', (req, res ) => {
    res.send('Hello World!');
}
);


app.post('/fruit', (req, res) => {
    const fruit = {
        color: 'Yellow',
        type: 'Banana',
    };
    fruits.push(fruit);

    localStorage.setItem('fruits', JSON.stringify(fruits));
    res.send('Fruit added!');
});

app.get('/fruits', (req, res) => {
    res.json(fruits);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);