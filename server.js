// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;

// Spin up the server
app.listen(port, ()=> {
  console.log('Server running on localhost: ' + port);
});

//GET route
app.get('/all', sendData);

function sendData(req, res) {
  if(projectData.length === 0) res.status(404).send('The weather information could not be found');
  res.send(projectData);
  console.log('GET complete');
}

//POST route
app.post('/add', weather);

function weather(req, res) {
  if (!req.body.temperature || !req.body.date) {
    //400 Bad Request
    res.status(400).send('Temperature or date are missing from the request');
    res.send('Weather data could not be posted');
  }
  const postData = {
    date : req.body.date,
    city : req.body.city,
    temperature : req.body.temperature,
    feelings : req.body.content
  }
  Object.assign(projectData, postData);
  res.send(projectData);
  console.log('POST complete')
}
