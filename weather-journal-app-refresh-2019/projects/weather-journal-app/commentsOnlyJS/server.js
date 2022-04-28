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
app.use(bodyparser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

// Spin up the server
app.listen(port, ()=> {
  console.log('Server running on localhost ${port}...');
}

//GET route
app.get('/all', sendData);

function sendData(req, res) {
  if(projectData.length === 0) res.status(404).send('The weather information could not be found');
  res.send(projectData);
}

//POST route
app.post('/all', weather);

function weather(req, res) {
  if (!req.body.temperature || !req.body.date) {
    //400 Bad Request
    res.status(400).send('Temperature or date are missing from the request');
    res.send('Weather data could not be posted');
  }
  const postData = {
    projectData.temperature = req.body.temperature,
    projectData.date = req.body.date,
    projectData.feelings = req.body.content
  }
  projectData.push(postData);
  res.send('Weather data posted');
}
  
