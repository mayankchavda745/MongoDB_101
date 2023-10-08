const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { Restaurant } = require('./models/Restaurant');
app.use(express.json());
mongoose.set("strictQuery", false)
mongoose.connect('mongodb://localhost:27017')
    .then(data => {
        console.log('database connected');
    })
    .catch(error => {
        console.log('error while connecting MongoDB');
    })

app.get('/', async (req, res) => {//Show
    try {
        const data = await Restaurant.find();
        const dataBycuisine = await Restaurant.find({ cuisine: 'Mexican' , _id:'64eae5066f99480613da22a9'});
        // const filterdata = data.filter(d=>d.cuisine==='Mexican' && d._id === '64eae5066f99480613da22a9');
        const id = '64eae5066f99480613da22a9';
         const dataById = await Restaurant.find({_id:id});//arrayofobj
        const dataById1 = await Restaurant.findById(id);//obj
        console.log(data);
        res.status(201).send(dataById);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


app.get('/:rollNo', (req, res) => {
    res.send(req.params.rollNo);
});

app.patch('/', (req, res) => {
    res.send({
        name: req.query.name,
        age: req.query.age,
        newobj: 1
    });
});

app.delete('/', (req, res) => {
    res.send({
        name: req.body.name,
        age: req.body.age
    });
});

app.post('/', (req, res) => {
    try {
        console.log('In post');
        res.status(201).send('hi in post');
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.listen(5001, () => {
    console.log('server is listening on 5001....');
});