const dotenv = require('dotenv');
dotenv.config();
const geonamesApi = process.env.API_GEO;
const geonames = process.env.GEONAMES;
const weatherbitApi = process.env.API_WB;
const weatherbit = process.env.WEATHERBIT;
const pixabayApi = process.env.API_PX;
const pixabay = process.env.PIXABAY;

//For later
// weatherbitUrl = '${weatherbit}lat=${lat}&lon=${lon}&key={weatherbitApi}&lang=en&units=I'
// pixabayUrl = '${pixabay}key=${pixabayApi}&q=${city}&image_type=photo&category=places'

let locationResults = []

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
app.use(express.static('dist'))

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

//GET response for homepage
app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

//GET response for returning data to updateUI
app.get('/display', function (req, res) {
    res.send(projectData));
});

//POST route
app.post('/coords', getTripDetails);

async function getTripDetails(req, res) {
    locationResults.push(city: req.body.city);
    getCoordinates(locationResults.city);
    getWeather(locationResults.lat, locationResults.lng);
    getImage(locationResults.city);    
}

async function getCoordinates(city) {
    const geoUrl = `${geonamesURL}${city}&username=${geonamesApiKey}`;
    const coordiates = await fetch(encodeURI(geoUrl))
        .then(res => res.json());
    locationResults.push(lat: coordinates.geonames[0].lat);
    locationresults.push(lng: coordinates.geonames[0].lng);
    };

async function getWeather(lat, lng) {
    const weatherbitUrl = '${weatherbit}lat=${lat}&lon=${lon}&key={weatherbitApi}&lang=en&units=I';
    const weatherData = await fetch(encodeURI(weatherbitUrl))
        .then(res => res.json());
    locationResults.push(temp: weatherData.data.weather.temp);
    locationResults.push(conditions: weatherData.data.weather.conditions);
    };

async function getImage(city) {
    const pixabayUrl = '${pixabay}key=${pixabayApi}&q=${city}&image_type=photo&category=places';
    const weather = await fetch(encodeURI(pixabayUrl))
        .then(res => res.json());
    locationResults.push(imageUrl: hits[0].pageUrl);
    };
