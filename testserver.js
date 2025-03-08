const express = require("express");
const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// this is a get route that responds with an apple object
app.get("/apple", (req, res) => {
    const apple = {
        variety: "red delecious",
        datePicked: "01-12-2024",
        price: "$50/lb",
    };
    res.send(apple);
});

// this is a get route that responds with an school object

app.get("/school", (req, res) => {
    const school = {
        subject: "reading",
        grade: "a+",
        date: "01-28-2025",
    };
    res.send(school);
});

//// this is a get route that responds with an sport object

app.get("/sport", (req, res) => {
    const sport = {
        team: "Bulldogs",
        type: "football",
        colors: "red&blue",
    };
    res.send(sport);
})


// this is a post route which takes a dog user request , sends to Api, then Api receives request and stores in a variable and sends it back,showing the entire variable content.

const dogs = [];
app.post("/dog", (req, res) => {
    const dog = req.body;
    dogs.push(dog);
    res.status(201).send("dog received");
    console.log(dogs);
});

//// this is a post route which takes a fruit user request , sends to Api, then Api receives request and stores in a variable and sends it back,showing the entire variable content.

const fruits = []
app.post("/fruit", (req, res) => {
    const fruit = req.body;
    fruits.push(fruit);
    res.status(201).send("fruit received");
    console.log(fruits);

})
// this is a post route which takes a shoe user request , sends to Api, then Api receives request and stores in a variable and sends it back
//Responding with an Array so the user can see
const shoes = []
app.post("/shoe", (req, res) => {
    const shoe = req.body;
    shoes.push(shoe);
    res.status(201).send(shoes);
    console.log(shoes);

})


app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});



