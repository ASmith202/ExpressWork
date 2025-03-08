const express = require('express');
const app = express();
const PORT = 3000;
const { LocalStorage } = require('node-localstorage');


app.use(express.json());

const localStorage = new LocalStorage('./storage');
let fruits = JSON.parse(localStorage.getItem('fruits')) || [];
let shoes = JSON.parse(localStorage.getItem('shoes')) || [];

app.get('/', (req, res) => {
    res.send('Hello World!');
});


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

app.post('/shoe', (req, res) => {
    //console.log(req);
    //console.log(req.body);
    //console.log(req.body.color);
    //console.log(req.body.type);

    const shoe = {
        color: req.body.color, // this code was used so that a new color of a shoe can be added from the request body
        type: req.body.type // this code was used so that a new type of shoe can be added from the request body
    };
    shoes.push(shoe);

    localStorage.setItem('shoes', JSON.stringify(shoes));
    res.send('shoe added!');
});

app.get('/shoes', (req, res) => {
    res.json(shoes);
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});