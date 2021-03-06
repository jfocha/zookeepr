const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const fs = require('fs');
const path = require('path');





const { animals } = require('./data/animals');




// app.get('/api/animals', (req, res) => {
//   let results = animals;
//   if (req.query) {
//     results = filterByQuery(req.query, results);
//   }
//   res.json(results);
// });

// app.get('/api/animals/:id', (req, res) => {
//   const result = findById(req.params.id, animals);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

// app.post('/api/animals', (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   // if any data in req.body is incorrect, send 400 error back
//   if (!validateAnimal(req.body)) {
//     res.status(400).send('The animal is not properly formatted.');
//   } else {
//     // add animal to json file and animals array in this function
//     const animal = createNewAnimal(req.body, animals);
//     // req.body is where our incoming content will be
//     console.log(req.body);
//     res.json(animal);
//   }
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get('/animals', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/animals.html'));
// });

// app.get('/zookeepers', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/zookeepers.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});